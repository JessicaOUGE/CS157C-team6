package com.MingqingZhu.ReaderClub;


import com.MingqingZhu.ReaderClub.Bean.Book;
import com.MingqingZhu.ReaderClub.Bean.Session;
import com.MingqingZhu.ReaderClub.Bean.User;
import com.MingqingZhu.ReaderClub.Util.BookDao;
import com.MingqingZhu.ReaderClub.Util.FileUtil;
import com.MingqingZhu.ReaderClub.Util.SessionDao;
import com.MingqingZhu.ReaderClub.Util.UserDao;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.util.*;

@Controller
public class MainController {

    @Autowired
    private UserDao userDao;
    @Autowired
    private BookDao bookDao;
    @Autowired
    private GridFsTemplate gridFsTemplate;
    @Autowired
    private SessionDao sessionDao;

    @GetMapping("/")
    public String home() {
        return "Login";
    }

    @PostMapping("/")
    public String goLogin(HttpSession session) {
        sessionDao.deleteById(session.getId());
        session.invalidate();
        return "Login";
    }

    @GetMapping("/welcome")
    public String welcome(Model model, HttpSession session) throws Exception {
        Session thisSession = sessionDao.findById(session.getId());
        if(thisSession == null) {
            model.addAttribute("username","Login");
            model.addAttribute("link","/");
            model.addAttribute("dropdown","Please login");
        } else {
            String greeting = "Hi, "+thisSession.getUserName();
            String link = "/details/" + thisSession.getUserName();
            model.addAttribute("username", greeting);
            model.addAttribute("link", link);
            model.addAttribute("dropdown","Log out");
        }
        List<Book> results = bookDao.getTwRandom();
        List<String> books = bookToJsonString(results);
        model.addAttribute("books", books);
        return "homepage";
    }

    @PostMapping("/welcome")
    public String doLogin(@RequestParam(name="username")String username, @RequestParam(name="password")String password, Model model, HttpServletRequest request) throws Exception {
        User tmp = userDao.findByUsername(username);
        if(tmp.getPassword().equals(password)) {
            String sessionId = request.getSession().getId();
            Session session = new Session();
            session.setUserName(username);
            session.setSessionId(sessionId);
            Date date = new Date();
            session.setTtl(date);
            sessionDao.saveSession(session);
            String greeting = "Hi, " + username;
            String link = "/details/" + username;
            List<Book> results = bookDao.getTwRandom();
            List<String> books = bookToJsonString(results);
            model.addAttribute("username",greeting);
            model.addAttribute("link",link);
            model.addAttribute("books",books);
            model.addAttribute("dropdown", "Log out");
            return "homepage";
        } else {
            return "error";
        }
    }

    @RequestMapping(value="/welcome/{keyword}", method=RequestMethod.GET)
    public String doSearch(@PathVariable(name="keyword") String keyword, Model model, HttpSession session) throws Exception {
        Session thisSession = sessionDao.findById(session.getId());
        if(thisSession == null) {
            model.addAttribute("username","Login");
            model.addAttribute("link","/");
            model.addAttribute("dropdown", "Please login");
        } else {
            String greeting = "Hi, "+thisSession.getUserName();
            String link = "/details/" + thisSession.getUserName();
            model.addAttribute("username", greeting);
            model.addAttribute("link", link);
            model.addAttribute("dropdown","Log out");
        }
        String key = keyword.substring(2,keyword.length());
        List<Book> results = bookDao.searchByKeyword(key);
        if(results.size() > 12) {
            results = results.subList(0,12);
        }
        List<String> books = bookToJsonString(results);
        model.addAttribute("books",books);
        return "homepage";
    }

    @RequestMapping("/details/{username}")
    public String details(@PathVariable(name="username") String username, Model model, HttpSession session) {
        Session thisSession = sessionDao.findById(session.getId());
        if(thisSession == null) {
            return "Login";
        } else {
            User user = userDao.findByUsername(username);
            model.addAttribute("username", user.getUsername());
            model.addAttribute("firstName", user.getFirstName());
            model.addAttribute("lastName", user.getLastName());
            model.addAttribute("myFavourite", user.getMyFavourite().toString().replace("[","").replace("]",""));
            model.addAttribute("myAudiobooks", user.getMyAudiobooks().toString().replace("[","").replace("]",""));
            return "user";
        }
    }

    @PostMapping("/details")
    public String changePassword(@RequestBody String passwordNusername) {
        String[] dataList = passwordNusername.split(",");
        String username = dataList[1];
        String newPassword = dataList[0];
        userDao.updatePassword(username,newPassword);
        return "user";
    }

    @GetMapping("/sign_up")
    public String signUp() {
        return "sign_up";
    }

    @RequestMapping("/bookpage/{bookname}")
    public String showBook(@PathVariable(name="bookname") String bookname, Model model, HttpSession session) {
        Session thisSession = sessionDao.findById(session.getId());
        if(thisSession == null) {
            model.addAttribute("like", "like");
        } else {
            User user = userDao.findByUsername(thisSession.getUserName());
            if(user.getMyFavourite().contains(bookname)) {
                model.addAttribute("like", "Unlike");

            } else {
                model.addAttribute("like", "Like");
            }
        }
        Book book = bookDao.findByBookName(bookname);
        model.addAttribute("title",book.getTitle());
        model.addAttribute("author", book.getAuthor());
        model.addAttribute("type",book.getType());
        model.addAttribute("description",book.getDescription());
        model.addAttribute("audioPath", book.getAudio());
        model.addAttribute("uploader",book.getUploader());
        model.addAttribute("coverImg",book.getCoverImg());

        return "bookPage";
    }

    @PostMapping("/bookpage/{bookname}")
    public String getTitle(@PathVariable(name="bookname") String bookname, Model model, @RequestBody String weatherLike, HttpSession session) {
        Session thisSession = sessionDao.findById(session.getId());
        if(thisSession == null) {
            return "Login";
        } else {
            User user = userDao.findByUsername(thisSession.getUserName());
            ArrayList<String> likeList = user.getMyFavourite();
            System.out.println(likeList);
            if(likeList.contains(weatherLike)) {
                likeList.remove(weatherLike);
                model.addAttribute("like", "Like");
            } else {
                likeList.add(weatherLike);
                model.addAttribute("like", "Unlike");
            }
            userDao.updateLikeList(thisSession.getUserName(), likeList);
            Book book = bookDao.findByBookName(bookname);
            model.addAttribute("title",book.getTitle());
            model.addAttribute("author", book.getAuthor());
            model.addAttribute("type",book.getType());
            model.addAttribute("description",book.getDescription());
            model.addAttribute("audioPath", book.getAudio());
            model.addAttribute("uploader",book.getUploader());
            model.addAttribute("coverImg",book.getCoverImg());

            return "bookPage";
        }
    }

    @PostMapping("/sign_up")
    public String doSignUp(@RequestBody User user ) {
        ArrayList<String> tmp = new ArrayList<>();
        user.setMyFavourite(tmp);
        user.setMyAudiobooks(tmp);
        int result = userDao.save(user);
        if(result == 0) {
            return "error";
        } else {
            return "Login";
        }
    }

    @GetMapping("/uploadPage")
    public String goUpload() {
        return "audiobook";
    }

    @PostMapping("/upload")
    public String handleUpload(@RequestParam("title")String title, @RequestParam("author")String author, @RequestParam("uploader")String uploader, @RequestParam("type")String type, @RequestParam("description")String description, @RequestParam("cover")MultipartFile cover, @RequestParam("audio")MultipartFile audio, HttpSession session){
        Session thisSession = sessionDao.findById(session.getId());
        if (thisSession == null) {
            return "Login";
        } else {
            User user = userDao.findByUsername(thisSession.getUserName());
            ArrayList<String> tmpList = user.getMyAudiobooks();
            tmpList.add(title);
            user.setMyAudiobooks(tmpList);
            userDao.updateAudioList(user.getUsername(), tmpList);

            Book tmp = new Book();
            tmp.setTitle(title);
            ArrayList<String> authors = new ArrayList<String>(Arrays.asList(author.split("\\s*,\\s*")));
            tmp.setAuthor(authors);
            tmp.setUploader(uploader);
            tmp.setType(type);
            tmp.setDescription(description);
            String audioFileName = audio.getOriginalFilename();
            audioFileName = generateRandomName(audioFileName);
            String audioPath = ClassUtils.getDefaultClassLoader().getResource("").getPath()+"static/audio/";
            try {
                FileUtil.fileupload(audio.getBytes(), audioPath, audioFileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
            String virtualAudioPath = "/audio/" + audioFileName;
            tmp.setAudio(virtualAudioPath);
            String imgFileName = cover.getOriginalFilename();
            imgFileName = generateRandomName(imgFileName);
            String imgPath = ClassUtils.getDefaultClassLoader().getResource("").getPath()+"static/pics/";
            try {
                FileUtil.fileupload(cover.getBytes(), imgPath, imgFileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
            String virtualImgPath = "/pics/" + imgFileName;
            tmp.setCoverImg(virtualImgPath);
            bookDao.save(tmp);


            return "audiobook";
        }

    }

    public static List<String> bookToJsonString(List<Book> books) throws Exception {
        Iterator it = books.listIterator();
        ObjectMapper objectMapper = new ObjectMapper();
        List<String> result = new ArrayList<>();
        while(it.hasNext()) {
            Book tmp = (Book)it.next();
            String json = objectMapper.writeValueAsString(tmp);
            result.add(json);
        }
        return result;
    }

    public static String generateRandomName(String origin) {
        Random rand = new Random(300);
        String newName = String.valueOf(rand.nextInt()) + origin;
        return newName;
    }
}

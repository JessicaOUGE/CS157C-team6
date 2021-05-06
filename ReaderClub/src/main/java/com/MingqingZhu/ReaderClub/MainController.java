package com.MingqingZhu.ReaderClub;


import com.MingqingZhu.ReaderClub.Bean.Book;
import com.MingqingZhu.ReaderClub.Bean.User;
import com.MingqingZhu.ReaderClub.Utility.BookDao;
import com.MingqingZhu.ReaderClub.Utility.UserDao;
import com.fasterxml.jackson.databind.ObjectMapper;
import netscape.javascript.JSObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import static org.springframework.data.mongodb.core.ReactiveMongoContext.getSession;

@Controller
public class MainController {

    @Autowired
    private UserDao userDao;
    @Autowired
    private BookDao bookDao;

    @GetMapping("/")
    public String home() {

        return "Login";
    }

    @GetMapping("/welcome")
    public String welcome(Model model) {
        model.addAttribute("username","Login");
        model.addAttribute("link","/");
        return "homepage";
    }

    @PostMapping("/welcome")
    public String doLogin(@RequestParam(name="username")String username, @RequestParam(name="password")String password, Model model, HttpServletRequest request) {
        User tmp = userDao.findByUsername(username);
//        String sessionId = request.getSession().getId();
//        System.out.println(sessionId);
        if(tmp.getPassword().equals(password)) {
            String greeting = "Hi, " + username;
            String link = "/details/" + username;
            model.addAttribute("username",greeting);
            model.addAttribute("link",link);
            return "homepage";
        } else {
            return "error";
        }
    }

    @RequestMapping(value="/welcome/{keyword}", method=RequestMethod.GET)
    public String doSearch(@PathVariable(name="keyword") String keyword, Model model) throws Exception {
        String key = keyword.substring(2,keyword.length());
        System.out.println(key);
        List<Book> results = bookDao.searchByKeyword(key);
        Iterator it = results.listIterator();
        ObjectMapper objectMapper = new ObjectMapper();
        while(it.hasNext()) {
            Book tmp = (Book)it.next();
            String json = objectMapper.writeValueAsString(tmp);
            System.out.println(json);
        }


        return "homepage";
    }

    @RequestMapping("/details/{username}")
    public String details(@PathVariable(name="username") String username, Model model) {
        User user = userDao.findByUsername(username);
        model.addAttribute("username", user.getUsername());
        model.addAttribute("firstName", user.getFirstName());
        model.addAttribute("lastName", user.getLastName());
        model.addAttribute("myFavourite", user.getMyFavourite().toString().replace("[","").replace("]",""));
        model.addAttribute("myAudiobooks", user.getMyAudiobooks().toString().replace("[","").replace("]",""));
        return "user";
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
    public String showBook(@PathVariable(name="bookname") String bookname) {
        System.out.println(bookname);
        Book book = bookDao.findByBookName(bookname);
        System.out.println(book.getTitle());
        System.out.println(book.getAuthor());
        System.out.println(book.getUploader());
        System.out.println(book.getType());
        System.out.println(book.getCoverImg());
        return "bookPage";
    }

    @PostMapping("/sign_up")
    public String doSignUp(@RequestBody User user ) {
        userDao.save(user);
        return "Login";
    }
}

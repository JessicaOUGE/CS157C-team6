package com.MingqingZhu.ReaderClub;


import com.MingqingZhu.ReaderClub.Bean.User;
import com.MingqingZhu.ReaderClub.Utility.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {

    @Autowired
    private UserDao userDao;

    @GetMapping("/")
    public String home() {

        return "Login";
    }

    @PostMapping("/welcome")
    public String doLogin(@RequestParam(name="username")String username, @RequestParam(name="password")String password, Model model) {
        User tmp = userDao.findByUsername(username);
        if(tmp.getPassword().equals(password)) {
            model.addAttribute("username",username);
            return "homepage";
        } else {
            return "error";
        }
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

    @GetMapping("/bookpage")
    public String showBook() {
        return "bookPage";
    }

    @PostMapping("/sign_up")
    public String doSignUp(@RequestBody User user ) {
        userDao.save(user);
        return "Login";
    }
}

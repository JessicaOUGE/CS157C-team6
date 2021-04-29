package com.MingqingZhu.ReaderClub;

import com.MingqingZhu.ReaderClub.Bean.User;
import com.MingqingZhu.ReaderClub.Utility.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
    public String doLogin(@RequestParam(name="username")String username, @RequestParam(name="password")String password) {
        User tmp = userDao.findByUsername(username);
        if(tmp.getPassword().equals(password)) {
            return "homepage";
        } else {
            return "error";
        }
    }

    @GetMapping("/sign_up")
    public String signUp() {
        return "sign_up";
    }

    @PostMapping("/sign_up")
    public String doSignUp(@RequestBody User user ) {
        userDao.save(user);
        return "Login";
    }
}

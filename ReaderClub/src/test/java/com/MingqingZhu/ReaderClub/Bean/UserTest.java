package com.MingqingZhu.ReaderClub.Bean;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.junit.jupiter.api.Assertions.*;

class UserTest {
    @Autowired
    private User user;

    @Test
    void setLastName() {
        User u = new User();
        u.setLastName("testLastname");
        assertEquals("testLastname", u.getLastName());
    }

    @Test
    void setGender() {
        User u = new User();
        u.setGender("testGender");
        assertEquals("testGender", u.getGender());
    }

    @Test
    void getUsername() {
    }

    @Test
    void setUsername() {
        User u = new User();
        u.setUsername("testUsername");
        assertEquals("testUsername", u.getUsername());
    }

    @Test
    void setPassword() {
        User u = new User();
        u.setPassword("testPassword");
        assertEquals("testPassword", u.getPassword());
    }

    @Test
    void setFirstName() {
        User u = new User();
        u.setFirstName("testFirstName");
        assertEquals("testFirstName", u.getFirstName());
    }

    @Test
    void getPassword() {
    }

    @Test
    void getFirstName() {
    }

    @Test
    void getMyFavourite() {
    }

//    @Test
//    void setMyFavourite() {
//        User u = new User();
//        u.setMyFavourite(user.getMyFavourite());
//        assertEquals("testLastname", u.getLastName());
//    }

//    @Test
//    void getMyAudiobooks() {
//    }
//
//    @Test
//    void setMyAudiobooks() {
//
//    }

    @Test
    void testToString() {
    }
}
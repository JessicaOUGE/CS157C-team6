package com.MingqingZhu.ReaderClub.Bean;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SessionTest {

    @Test
    void setSessionId() {
        Session s = new Session();
        s.setSessionId("testID");
        assertEquals("testID", s.getSessionId());
    }

    @Test
    void setUserName() {
        Session s = new Session();
        s.setUserName("testUserName");
        assertEquals("testUserName", s.getUserName());
    }

}
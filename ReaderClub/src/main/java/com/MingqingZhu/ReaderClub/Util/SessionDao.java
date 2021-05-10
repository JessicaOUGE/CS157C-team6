package com.MingqingZhu.ReaderClub.Util;


import com.MingqingZhu.ReaderClub.Bean.Session;

import javax.servlet.http.HttpSession;

public interface SessionDao {

    Session findById(String id);
    void saveSession(Session session);
}

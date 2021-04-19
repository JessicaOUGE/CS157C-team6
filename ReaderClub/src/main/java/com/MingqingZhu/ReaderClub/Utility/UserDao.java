package com.MingqingZhu.ReaderClub.Utility;

import com.MingqingZhu.ReaderClub.Bean.User;

public interface UserDao {
    void save(User user);
    User findByUsername(String username);
    void deleteByUsername(String username);
}

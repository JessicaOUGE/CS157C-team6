package com.MingqingZhu.ReaderClub.Util;

import com.MingqingZhu.ReaderClub.Bean.User;

import java.util.ArrayList;

public interface UserDao {
    int save(User user);
    User findByUsername(String username);
    void deleteByUsername(String username);
    void updatePassword(String username, String newPassword);
    void updateLikeList(String username, ArrayList<String> newList);
    void updateAudioList(String username, ArrayList<String> newList);
}

package com.MingqingZhu.ReaderClub.Util;

import com.MingqingZhu.ReaderClub.Bean.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class UserDaoImp implements UserDao{

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public int save(User user) {
        User tmp = findByUsername(user.getUsername());
        if(tmp == null) {
            mongoTemplate.insert(user);
            return 1;
        }
        return 0;
    }

    @Override
    public User findByUsername(String username) {
        Query query = new Query(Criteria.where("username").is(username));
        User user = mongoTemplate.findOne(query, User.class);
        return user;
    }

    @Override
    public void deleteByUsername(String username) {

    }

    @Override
    public void updatePassword(String username, String newPassword) {
        Query query = new Query(Criteria.where("username").is(username));
        Update update = Update.update("password", newPassword);
        mongoTemplate.updateFirst(query, update, User.class);
    }

    @Override
    public void updateLikeList(String username, ArrayList<String> newList) {
        Query query = new Query(Criteria.where("username").is(username));
        Update update = Update.update("myFavourite", newList);
        mongoTemplate.updateFirst(query, update, User.class);
    }

    @Override
    public void updateAudioList(String username, ArrayList<String> newList) {
        Query query = new Query(Criteria.where("username").is(username));
        Update update = Update.update("myAudiobooks", newList);
        mongoTemplate.updateFirst(query, update, User.class);
    }
}

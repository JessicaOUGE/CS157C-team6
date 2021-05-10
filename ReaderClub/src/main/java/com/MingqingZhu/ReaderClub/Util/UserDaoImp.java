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
    public void save(User user) {
        mongoTemplate.insert(user);
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
        Update update = Update.update("myFavoutire", newList);
        mongoTemplate.updateFirst(query, update, User.class);
    }
}
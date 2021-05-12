package com.MingqingZhu.ReaderClub.Util;

import com.MingqingZhu.ReaderClub.Bean.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import javax.servlet.http.HttpSession;

@Repository
public class SessionDaoImp implements SessionDao{

    @Autowired
    private MongoTemplate mongoTemplate;


    @Override
    public Session findById(String id) {
        Query query = new Query(Criteria.where("sessionId").is(id));
        Session session = mongoTemplate.findOne(query, Session.class);
        return session;
    }

    @Override
    public void saveSession(Session session) {
        mongoTemplate.insert(session);
    }

    @Override
    public void deleteById(String id) {
        Query query = new Query(Criteria.where("sessionId").is(id));
        mongoTemplate.remove(query, Session.class);
    }
}

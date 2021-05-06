package com.MingqingZhu.ReaderClub.Utility;

import com.MingqingZhu.ReaderClub.Bean.Book;
import com.MingqingZhu.ReaderClub.Bean.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class BookDaoImp implements BookDao{

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void save(Book book) {

    }

    @Override
    public Book findByBookName(String bookname) {
        Query query = new Query(Criteria.where("title").is(bookname));
        Book book = mongoTemplate.findOne(query, Book.class);
        return book;
    }
}

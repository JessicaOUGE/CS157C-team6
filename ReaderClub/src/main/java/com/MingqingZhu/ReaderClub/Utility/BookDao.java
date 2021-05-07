package com.MingqingZhu.ReaderClub.Utility;

import com.MingqingZhu.ReaderClub.Bean.Book;

import java.util.ArrayList;
import java.util.List;

public interface BookDao {
    void save(Book book);
    Book findByBookName(String bookname);
    List<Book> searchByKeyword(String bookname);
    List<Book> getTwRandom();
}

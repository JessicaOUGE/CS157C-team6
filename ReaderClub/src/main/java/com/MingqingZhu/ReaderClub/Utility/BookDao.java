package com.MingqingZhu.ReaderClub.Utility;

import com.MingqingZhu.ReaderClub.Bean.Book;

public interface BookDao {
    void save(Book book);
    Book findByBookName(String bookname);
}

package com.MingqingZhu.ReaderClub.Bean;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
class BookTest {

    @Test
    void setTitle() {
        Book b = new Book();
        b.setTitle("testTitle");
        assertEquals("testTitle", b.getTitle());
    }


    @Test
    void setUploader() {
        Book b = new Book();
        b.setUploader("testUploader");
        assertEquals("testUploader", b.getUploader());
    }

    @Test
    void setType() {
        Book b = new Book();
        b.setType("testType");
        assertEquals("testType", b.getType());
    }

    @Test
    void getDescription() {
    }

    @Test
    void setDescription() {
        Book b = new Book();
        b.setDescription("testDescription");
        assertEquals("testDescription", b.getDescription());
    }

    @Test
    void getCoverImg() {
    }

    @Test
    void setCoverImg() {
        Book b = new Book();
        b.setCoverImg("testCoverImg");
        assertEquals("testCoverImg", b.getCoverImg());
    }

    @Test
    void getAudio() {
    }

    @Test
    void setAudio() {
        Book b = new Book();
        b.setAudio("testAudio");
        assertEquals("testAudio", b.getAudio());
    }
}
package com.MingqingZhu.ReaderClub.Bean;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "User")
public class User {
    private String username;
    private String firstName;
    private String password;
    private String lastName;
    private String gender;
    private ArrayList<String> myFavourite;
    private ArrayList<String> myAudiobooks;

    public User() {
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() {
        return firstName;
    }

    public ArrayList<String> getMyFavourite() {
        return myFavourite;
    }

    public void setMyFavourite(ArrayList<String> myFavourite) {
        this.myFavourite = myFavourite;
    }

    public ArrayList<String> getMyAudiobooks() {
        return myAudiobooks;
    }

    public void setMyAudiobooks(ArrayList<String> myAudiobooks) {
        this.myAudiobooks = myAudiobooks;
    }

    @Override
    public String toString() {
        return "User [First name=" + firstName + ", Last name=" + lastName + ", Username= " + username + ", password=" + password + ", gender=" + gender+"]";
    }
}

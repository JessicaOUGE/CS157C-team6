package com.cs157c.audioMongoDB.controller;

import com.cs157c.audioMongoDB.model.Photo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotoRepository extends MongoRepository<Photo,String> {
}

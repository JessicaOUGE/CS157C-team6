package com.team6.readerclubmongodb;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<User, String> {
    Role findByRole(String role);
    public void save(Role newAdminRole);
}

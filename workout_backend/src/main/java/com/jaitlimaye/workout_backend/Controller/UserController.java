package com.jaitlimaye.workout_backend.Controller;

import com.jaitlimaye.workout_backend.Entity.Users;
import com.jaitlimaye.workout_backend.Repository.AreasRepo;
import com.jaitlimaye.workout_backend.Repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController
{
    @Autowired
    UsersRepo usersRepository;

    @PostMapping("/users")
    Users newUser(@RequestBody Users newUser)
    {
        return usersRepository.save(newUser);
    }

}

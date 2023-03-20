package com.jaitlimaye.workout_backend.Controller;

import com.jaitlimaye.workout_backend.Entity.Areas;
import com.jaitlimaye.workout_backend.Entity.Users;
import com.jaitlimaye.workout_backend.Repository.AreasRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AreaController
{
    @Autowired
    AreasRepo areasRepository;
    @GetMapping("/areas")
    List<Areas> getAllAreas()
    {
        return areasRepository.findAll();
    }
    @PostMapping("/areas")
    Areas newArea(@RequestBody Areas newArea)
    {
        return areasRepository.save(newArea);
    }
}

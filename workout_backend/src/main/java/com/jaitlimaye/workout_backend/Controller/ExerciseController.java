package com.jaitlimaye.workout_backend.Controller;


import com.jaitlimaye.workout_backend.Entity.Exercises;
import com.jaitlimaye.workout_backend.Repository.ExercisesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ExerciseController
{
    @Autowired
    ExercisesRepo exRepository;

    @PostMapping("/exercises/new")
    Exercises newEx(@RequestBody Exercises newEx)
    {
        return exRepository.save(newEx);
    }

    @PostMapping("/exercises")
    List<Exercises> getExercisesofArea(@RequestBody Map<String, Integer> json)
    {
        return exRepository.findByAreaid(json.get("id"));
    }

}

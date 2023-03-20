package com.jaitlimaye.workout_backend.Controller;

import com.jaitlimaye.workout_backend.Entity.Exercises;
import com.jaitlimaye.workout_backend.Entity.Routines;
import com.jaitlimaye.workout_backend.Repository.ExercisesRepo;
import com.jaitlimaye.workout_backend.Repository.RoutinesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RoutineController {
    @Autowired
    RoutinesRepo routinesRepository;

    @Autowired
    ExercisesRepo exercisesRepo;
    @PostMapping("/routines/new")
    Routines newRoutine(@RequestBody Routines newRoutine)
    {
        return routinesRepository.save(newRoutine);
    }

    @PostMapping("/routines")
    List<Routines> getDateRoutine(@RequestBody Map<String, String> json)
    {
        Integer id = Integer.parseInt(json.get("id"));
        List<Routines> resp = routinesRepository.findByDateAndUsrid(json.get("date"),id);
        for (Routines R: resp)
        {
            Optional<Exercises> Ex =  exercisesRepo.findById(R.getEx_id());
            if(!Ex.equals(null))
            {
                R.setEx_name(Ex.get().getName());
            }
        }
        return resp;
    }

    @DeleteMapping("/routines/{id}")
    String deleteRoutine(@PathVariable Integer id)
    {
        if(routinesRepository.existsById(id))
        {
            routinesRepository.deleteById(id);
            return  "Routine with id "+id+" has been deleted success.";
        }
        return "Routine not found";
    }

    @PutMapping("/routines/{id}")
    Routines UpdateRoutine(@RequestBody Routines newRoutine,@PathVariable Integer id)
    {
        return routinesRepository.findById(id)
                .map(routine -> {
                    routine.setWt(newRoutine.getWt());
                    routine.setWt_l(newRoutine.getWt_l());
                    routine.setWt_r(newRoutine.getWt_r());
                    routine.setReps(newRoutine.getReps());
                    return routinesRepository.save(routine);
                }).get();
    }
}

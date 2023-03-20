package com.jaitlimaye.workout_backend.Repository;

import com.jaitlimaye.workout_backend.Entity.Routines;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoutinesRepo extends JpaRepository<Routines,Integer> {
    List<Routines>findByDateAndUsrid(String date, Integer id);

}

package com.jaitlimaye.workout_backend.Repository;

import com.jaitlimaye.workout_backend.Entity.Exercises;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExercisesRepo extends JpaRepository<Exercises,Integer>{

    List<Exercises> findByAreaid(Integer aid);
}

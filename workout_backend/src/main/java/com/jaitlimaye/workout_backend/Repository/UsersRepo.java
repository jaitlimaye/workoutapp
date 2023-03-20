package com.jaitlimaye.workout_backend.Repository;

import com.jaitlimaye.workout_backend.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepo extends JpaRepository<Users,Integer> {
}

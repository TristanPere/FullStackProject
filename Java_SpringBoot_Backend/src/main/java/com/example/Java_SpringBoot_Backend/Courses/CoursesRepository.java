package com.example.Java_SpringBoot_Backend.Courses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoursesRepository extends JpaRepository<Course, Long> {
    //Read
    @Query(value="Select Distinct uuid FROM course ", nativeQuery = true)
    List<Long> getDistinctUuids();

    @Query(value = "SELECT * FROM course ORDER RAND() LIMIT 1",nativeQuery = true)
    Course getRandomCourse();

    @Query(value = "SELECT DISTINCT school FROM course ORDER BY school",nativeQuery = true)
    List<String> getDistinctSchools();

    void deleteCourseByUuid(Long uuid);

}

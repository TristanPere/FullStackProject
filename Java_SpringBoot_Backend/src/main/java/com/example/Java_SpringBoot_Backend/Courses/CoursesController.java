package com.example.Java_SpringBoot_Backend.Courses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
public class CoursesController {
    @Autowired
    CoursesServices coursesServices;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(CourseNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }
    // CREATE
    @PostMapping("/courses/create")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        coursesServices.addCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(course);
    }
    @PostMapping("/addallcourses")
    public ResponseEntity<String> createCourse(@RequestBody ArrayList<Course> course){
        for (Course c: course){
            coursesServices.addCourse(c);
        }
        return ResponseEntity.status(HttpStatus.OK).body("Successful");
    }
    // READ

    @GetMapping("/course")
    public ResponseEntity<Course> course() {
        return ResponseEntity.status(HttpStatus.OK).body(coursesServices.getRandomCourse());
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourses(@RequestParam(required = false, defaultValue = "10") long limit) {
        return ResponseEntity.status(HttpStatus.OK).body(coursesServices.getAllCourses(limit));
    }

    @GetMapping("/course/random")
    public ResponseEntity<Course> getRandomCourse() {
        return ResponseEntity.status(HttpStatus.OK).body(coursesServices.getRandomCourse());
    }

    @GetMapping("/course/{uuid}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long uuid) {
        return ResponseEntity.status(HttpStatus.OK).body(coursesServices.getCourseByStringUUID(uuid));
    }
    @GetMapping("/course/schools")
    public ResponseEntity<List<String>> getSchools() {
        return ResponseEntity.status(HttpStatus.OK).body(coursesServices.getDistinctSchools());
    }


    // UPDATE
    @PutMapping("/updateCourse/{UUID}")
    public ResponseEntity<ResponseEntity<Course>> updateCourseById(@RequestBody Course newCourse , @PathVariable Long uuid) {
        coursesServices.updateCourseByUUID(newCourse, uuid);
        return ResponseEntity.status(HttpStatus.OK).body(getCourseById(uuid));
    }
    // DELETE

    @DeleteMapping("/course/{uuid}")
    public ResponseEntity<String> deleteCourseByUuid(@PathVariable Long uuid) {
         coursesServices.deleteCourseByUuid(uuid);
         return ResponseEntity.status(HttpStatus.OK).body("Course Deleted Successfully");
    }
}

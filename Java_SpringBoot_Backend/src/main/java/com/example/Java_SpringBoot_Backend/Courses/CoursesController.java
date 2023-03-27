package com.example.Java_SpringBoot_Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class CoursesController {
    @Autowired
    CoursesServices coursesServices;

    // CREATE
    @PostMapping("/addCourse")
    public Course createCourse(@RequestBody Course course) {
        coursesServices.addCourse(course);
        return course;
    }
    // READ

    @GetMapping("/course")
    public Course greet() {
        return coursesServices.getRandomCourse();
    }

    @GetMapping("/courses")
    public List<Course> getGreetings( @RequestParam(required = false, defaultValue = "10") long limit) {
        return coursesServices.getAllCourses(limit);
    }

    @GetMapping("/course/random")
    public Course getRandomGreeting() {
        return coursesServices.getRandomCourse();
    }

    @GetMapping("course/{uuid}")
    public Course getGreetingById(@PathVariable String uuid) {
        return coursesServices.getCourseByStringUUID(uuid);
    }

    // UPDATE
    @PutMapping("/updateCourse/{UUID}")
    public Course updateGreetingById(@RequestBody Course newCourse , @PathVariable long id) {
        String uuid = String.valueOf(id);
        coursesServices.updateCourseByUUID(newCourse, uuid);
        return getGreetingById(uuid);
    }
    // DELETE

    @DeleteMapping("/course/{id}")
    public boolean deleteCourseByUUID(@PathVariable String uuid) {
        return coursesServices.deleteCourseByUUID(uuid);
    }
}

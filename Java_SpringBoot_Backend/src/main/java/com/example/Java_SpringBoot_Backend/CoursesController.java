package com.example.Java_SpringBoot_Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class CoursesController {
    @Autowired
    CoursesRepository coursesRepository;

    // CREATE
    @PostMapping("/greeting")
    public Course createGreeting(@RequestBody Course greeting) {
        coursesRepository.addCourse(greeting);
        return greeting;
    }
    // READ

    @GetMapping("/greet")
    public String greet() {
        return "Hello World!";
    }

    @GetMapping("/greetings")
    public List<Course> getGreetings() {
        return coursesRepository.getCourses();
    }

    @GetMapping("/greeting/random")
    public Course getRandomGreeting() {
        return coursesRepository.getRandomCourse();
    }

    @GetMapping("greeting/{id}")
    public Course getGreetingById(@PathVariable String uuid) {
        return coursesRepository.getCourseByStringUUID(uuid);
    }

    // UPDATE
//    @PutMapping("/updateGreeting/{id}")
//    public Greeting updateGreetingById(@RequestBody Greeting greeting , @PathVariable long id) {
//        return coursesRepository.updateGreetingByID(greeting, id);
//    }
    // DELETE

    @DeleteMapping("/greeting/{id}")
    public boolean deleteGreetingById(@PathVariable String uuid) {
        return coursesRepository.deleteCourseByUUID(uuid);
    }
}

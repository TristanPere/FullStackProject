package com.example.Java_SpringBoot_Backend.Courses;

public class CourseNotFoundException extends RuntimeException{
    public CourseNotFoundException(){
        super("Course Has Not Been Found!");
    }
}

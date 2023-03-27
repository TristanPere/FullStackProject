package com.example.Java_SpringBoot_Backend;

public class CourseNotFoundException extends RuntimeException{
    public CourseNotFoundException(){
        super("Course Has Not Been Found!");
    }
}

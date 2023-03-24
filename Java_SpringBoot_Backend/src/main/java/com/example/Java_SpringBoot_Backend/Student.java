package com.example.Java_SpringBoot_Backend;


import java.time.LocalDate;
import java.util.ArrayList;

public class Student {
   private String studentID;
   private String firstName;
   private String lastName;
   private String school;
   private ArrayList<Course> currentCourses;
   private ArrayList<Course> completedCourses;
   private LocalDate enrolmentDate;
   private LocalDate graduationDate;
}

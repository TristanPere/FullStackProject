package com.example.Java_SpringBoot_Backend;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Random;

@Repository
public class CoursesRepository {
    ArrayList<Course> courses = new ArrayList<>();

    //CREATE
    public Course addCourse(Course course){
        courses.add(course);
        return course;
    }

    public ArrayList<Course> getAllCourses() {
        return courses;
    }
//READ
    public Course getCourseByStringUUID(String uuid) {
        for (Course course : courses
        ) {
            if (course.getStringUUID() == uuid) {
                return course;
            }
        }
        return null;
    }
    public Boolean hasCourseByStringUUID(String uuid) {
        for (Course course : courses
        ) {
            if (course.getStringUUID() == uuid) {
                return true;
            }
        }
        return false;
    }


    public Course getRandomCourse() {
        Random random = new Random();
        return courses.get(random.nextInt(courses.size()));
    }
    //update
    public void updateGreeting(Course newCourse, String uuid){
        for (int i = 0; i < courses.size(); i++) {
            if(courses.get(i).getStringUUID() == uuid){
                courses.set(i, newCourse);
                return;
            }
        }
    }
    //DELETE
    public boolean deleteCourseByUUID(String uuid) {
        try {
            courses.remove(getCourseByStringUUID(uuid));
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}

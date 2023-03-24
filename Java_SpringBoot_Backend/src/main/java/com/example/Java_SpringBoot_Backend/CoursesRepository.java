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

    public ArrayList<Course> getCourses() {
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
    public Course getRandomCourse() {
        Random random = new Random();
        return courses.get(random.nextInt(courses.size()));
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

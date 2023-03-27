package com.example.Java_SpringBoot_Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CoursesServices {

    @Autowired
    CoursesRepository coursesRepository;

    public void addCourse(Course course){
        coursesRepository.addCourse(course);
    }

    public Course getCourseByStringUUID(String uuid) {
        if (!coursesRepository.hasCourseByStringUUID(uuid)) {
            throw new CourseNotFoundException();
        }
        return coursesRepository.getCourseByStringUUID(uuid);
    }
    public Course getRandomCourse(){
        return coursesRepository.getRandomCourse();
    }

    public List<Course> getAllCourses(long limit){
        return coursesRepository.getAllCourses().subList(0, (int) limit);
    }
    // UPDATE
    public void updateCourseByUUID(Course newCourse, String UUID) {
        if (!coursesRepository.hasCourseByStringUUID(UUID)) {
            throw new CourseNotFoundException();
        }
        coursesRepository.updateGreeting(newCourse, UUID);
    }
    public boolean deleteCourseByUUID(String uuid){
        return coursesRepository.deleteCourseByUUID(uuid);
    }


}

package com.example.Java_SpringBoot_Backend.Courses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CoursesServices {

    @Autowired
    CoursesRepository coursesRepository;

    public void addCourse(Course course){
        coursesRepository.save(course);
    }

    public Course getCourseByStringUUID(Long uuid) {
        Optional<Course> course = coursesRepository.findById(uuid);
        if (course.isEmpty()){
            throw new CourseNotFoundException();
        }
        return course.get();
    }
    public Course getRandomCourse(){
        return coursesRepository.getRandomCourse();
    }

    public List<Course> getAllCourses(long limit){
        return coursesRepository.findAll()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }
    public List<String> getDistinctSchools(){
        return coursesRepository.getDistinctSchools();
    }
    ;

    // UPDATE
    public void updateCourseByUUID(Course newCourse, Long uuid) {
        if (!coursesRepository.existsById(uuid)) {
            throw new CourseNotFoundException();
        }
        newCourse.setUuid(uuid);
        coursesRepository.save(newCourse);
    }
    @Transactional
    public void deleteCourseByUuid(Long uuid){
        if (!coursesRepository.existsById(uuid)) {
            throw new CourseNotFoundException();
        }

         coursesRepository.deleteCourseByUuid(uuid);
    }
}

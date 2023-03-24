package com.example.Java_SpringBoot_Backend;


import jakarta.annotation.PostConstruct;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.*;
import java.time.LocalDate;
import java.util.ArrayList;

@Component
public class CourseInitializer {
    private final CoursesRepository coursesRepository;

    @Value("classpath:courses.json")
    private Resource resourceFile;

    @Autowired
    public CourseInitializer(CoursesRepository coursesRepository) {
        this.coursesRepository = coursesRepository;
    }

    @PostConstruct
    public void init() {
        JSONParser jsonParser = new JSONParser();
        try (FileReader reader = new FileReader(resourceFile.getFile())) {
            Object obj = jsonParser.parse(reader);

            JSONArray jsonArray = (JSONArray) obj;

            for (Object course : jsonArray) {
                JSONObject coursesJSON = (JSONObject) course;

                long id = (long) coursesJSON.get("id");
                String courseTitle = (String) coursesJSON.get("courseTitle");
                String professor = (String) coursesJSON.get("professor");
                LocalDate startDate = LocalDate.parse((String) coursesJSON.get("startDate"));
                LocalDate endDate = LocalDate.parse((String) coursesJSON.get("endDate"));
                String season = (String) coursesJSON.get("season");
                String description = (String) coursesJSON.get("description");
                String studyType = (String) coursesJSON.get("studyType");
                int totalSeats = (int) coursesJSON.get("totalSeats");
                int seatsFilled = (int) coursesJSON.get("seatsFilled");
                int contactHours = (int) coursesJSON.get("contactHours");
                ArrayList<String> schools = (ArrayList<String>) coursesJSON.get("schools");

                // HOW CAN WE USE THIS DATA?
                coursesRepository.addCourse(new Course(courseTitle, professor, startDate, endDate, season, description, studyType, totalSeats, seatsFilled, contactHours, schools));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

package com.example.Java_SpringBoot_Backend.Courses;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uuid;
    private String courseTitle;
    private String professor;
    private LocalDate startDate;
    private  LocalDate endDate;
    private String season;
    private String description;
    private String studyType;
    private  long totalSeats;
    private long seatsFilled;
    private long contactHours;
    private String school;

    public Course(){};
    public Course(String courseTitle, String professor, LocalDate startDate, LocalDate endDate, String season, String description, String studyType, long totalSeats, long seatsFilled, long contactHours, String school ) {
        this.courseTitle = courseTitle;
        this.professor = professor;
        this.startDate = startDate;
        this.endDate = endDate;
        this.season = season;
        this.description = description;
        this.studyType = studyType;
        this.totalSeats = totalSeats;
        this.seatsFilled = seatsFilled;
        this.contactHours = contactHours;
        this.school = school;
    }
    public Long getUuid() {
        return uuid;
    }
    public void setUuid(Long uuid) {
        this.uuid = uuid;
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStudyType() {
        return studyType;
    }

    public void setStudyType(String studyType) {
        this.studyType = studyType;
    }

    public long getTotalSeats() {
        return totalSeats;
    }

    public void setTotalSeats(long totalSeats) {
        this.totalSeats = totalSeats;
    }

    public long getSeatsFilled() {
        return seatsFilled;
    }

    public void setSeatsFilled(long seatsFilled) {
        this.seatsFilled = seatsFilled;
    }

    public long getContactHours() {
        return contactHours;
    }

    public void setContactHours(long contactHours) {
        this.contactHours = contactHours;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }
}

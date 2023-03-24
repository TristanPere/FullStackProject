package com.example.Java_SpringBoot_Backend;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.UUID;

public class Course {
    private UUID uuid = UUID.randomUUID();
    private String stringUUID = uuid.toString();
    private String courseTitle;
    private String professor;
    private LocalDate startDate;
    private  LocalDate endDate;
    private String season;
    private String description;
    private String studyType;
    private  int totalSeats;
    private int seatsFilled;
    private int contactHours;
    private ArrayList<String> schools;
    private ArrayList<String> students;

    public Course(String courseTitle, String professor, LocalDate startDate, LocalDate endDate, String season, String description, String studyType, int totalSeats, int seatsFilled, int contactHours, ArrayList<String> schools ) {
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
        this.schools = schools;
    }

    public UUID getUuid() {
        return uuid;
    }

    public void setNewUuid() {
        this.uuid = UUID.randomUUID();
    }

    public String getStringUUID() {
        return stringUUID;
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

    public int getTotalSeats() {
        return totalSeats;
    }

    public void setTotalSeats(int totalSeats) {
        this.totalSeats = totalSeats;
    }

    public int getSeatsFilled() {
        return seatsFilled;
    }

    public void setSeatsFilled(int seatsFilled) {
        this.seatsFilled = seatsFilled;
    }

    public int getContactHours() {
        return contactHours;
    }

    public void setContactHours(int contactHours) {
        this.contactHours = contactHours;
    }

    public ArrayList<String> getSchools() {
        return schools;
    }

    public void setSchools(ArrayList<String> schools) {
        this.schools = schools;
    }

    public ArrayList<String> getStudents() {
        return students;
    }

    public void setStudents(ArrayList<String> students) {
        this.students = students;
    }
}

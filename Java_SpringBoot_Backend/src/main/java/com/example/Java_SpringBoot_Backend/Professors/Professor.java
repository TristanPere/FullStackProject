package com.example.Java_SpringBoot_Backend.Professors;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uuid;


    private String fullName;
    private String firstName;
    private String lastName;
    private String email;
    private String school;
    private String courses;
    private String idImage;
    private String pre_nominals;

    public Professor() {
    };

    public Professor(String fullName, String firstName, String lastName, String email, String school, String courses, String idImage, String pre_nominals) {
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.school = school;
        this.courses = courses;
        this.idImage = idImage;
        this.pre_nominals = pre_nominals;
    }

    public Long getUuid() {
        return uuid;
    }

    public void setUuid(Long uuid) {
        this.uuid = uuid;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getCourses() {
        return courses;
    }

    public void setCourses(String courses) {
        this.courses = courses;
    }

    public String getIdImage() {
        return idImage;
    }

    public void setIdImage(String idImage) {
        this.idImage = idImage;
    }

    public String getPre_nominals() {
        return pre_nominals;
    }

    public void setPre_nominals(String pre_nominals) {
        this.pre_nominals = pre_nominals;
    }
}

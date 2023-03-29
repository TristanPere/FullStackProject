package com.example.Java_SpringBoot_Backend.Professors;

public class ProfessorNotFoundException extends RuntimeException{
    public ProfessorNotFoundException(){
        super("Professor Has Not Been Found!");
    }
}

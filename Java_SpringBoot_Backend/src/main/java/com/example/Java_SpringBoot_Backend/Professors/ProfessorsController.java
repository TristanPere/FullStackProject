package com.example.Java_SpringBoot_Backend.Professors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class ProfessorsController {
    @Autowired
    ProfessorsServices professorsServices;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(ProfessorNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }
    // CREATE
    @PostMapping("/professor")
    public ResponseEntity<Professor>createProfessor(@RequestBody Professor professor) {
        professorsServices.addProfessor(professor);
        return ResponseEntity.status(HttpStatus.CREATED).body(professor);
    }
        @PostMapping("/addallprofessors")
    public ResponseEntity<String> createProfessors(@RequestBody ArrayList<Professor> professors){
        for (Professor p: professors){
            professorsServices.addProfessor(p);
        }
        return  ResponseEntity.status(HttpStatus.OK).body("Successful");
    }

    // READ

    @GetMapping("/professor")
    public ResponseEntity<Professor> professor() {
        return ResponseEntity.status(HttpStatus.OK).body(professorsServices.getRandomProfessor());
    }

    @GetMapping("/professors")
    public ResponseEntity<List<Professor>> getProfessor( @RequestParam(required = false, defaultValue = "10") long limit) {
        return ResponseEntity.status(HttpStatus.OK).body(professorsServices.getAllProfessors(limit));
    }

    @GetMapping("/professor/random")
    public ResponseEntity<Professor> getRandomProfessor() {
        return ResponseEntity.status(HttpStatus.OK).body(professorsServices.getRandomProfessor());
    }

    @GetMapping("professor/{uuid}")
    public ResponseEntity<Professor> getProfessorById(@PathVariable Long uuid) {
        return ResponseEntity.status(HttpStatus.OK).body(professorsServices.getProfessorByStringUuid(uuid));
    }

    // UPDATE
    @PutMapping("/professor/{uuid}")
    public ResponseEntity<ResponseEntity<Professor>> updateProfessorById(@RequestBody Professor newProfessor , @PathVariable Long uuid) {
        professorsServices.updateProfessorByUUID(newProfessor, uuid);
        return ResponseEntity.status(HttpStatus.OK).body(getProfessorById(uuid));
    }
    // DELETE

    @DeleteMapping("/professor/{uuid}")
    public ResponseEntity<String> deleteProfessorByUuid(@PathVariable Long uuid) {
         professorsServices.deleteProfessorByUuid(uuid);
         return ResponseEntity.status(HttpStatus.OK).body("Professor Deleted Successfully");
    }
}

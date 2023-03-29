package com.example.Java_SpringBoot_Backend.Professors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProfessorsServices {

    @Autowired
    ProfessorsRepository professorsRepository;

    public void addProfessor(Professor professor){
        professorsRepository.save(professor);
    }

    public Professor getProfessorByStringUuid(Long uuid) {
        Optional<Professor> professor = professorsRepository.findById(uuid);
        if (professor.isEmpty()){
            throw new ProfessorNotFoundException();
        }
        return professor.get();
    }
    public Professor getRandomProfessor(){
        return professorsRepository.getRandomProfessor();
    }

    public List<Professor> getAllProfessors(long limit){
        return professorsRepository.findAll()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }

    // UPDATE
    public void updateProfessorByUUID(Professor newProfessor, Long uuid) {
        if (!professorsRepository.existsById(uuid)) {
            throw new ProfessorNotFoundException();
        }
        newProfessor.setUuid(uuid);
        professorsRepository.save(newProfessor);
    }
    @Transactional
    public void deleteProfessorByUuid(Long uuid){
        if (!professorsRepository.existsById(uuid)) {
            throw new ProfessorNotFoundException();
        }

         professorsRepository.deleteProfessorByUuid(uuid);
    }
}

package com.example.Java_SpringBoot_Backend.Professors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfessorsRepository extends JpaRepository<Professor, Long> {
    //Read
    @Query(value="Select Distinct uuid FROM professor ", nativeQuery = true)
    List<Long> getDistinctUuids();

    @Query(value = "SELECT * FROM professor ORDER BY RAND() LIMIT 1",nativeQuery = true)
    Professor getRandomProfessor();

    @Query(value = "SELECT DISTINCT school FROM professor ORDER BY school",nativeQuery = true)
    List<String> getDistinctSchools();


    void deleteProfessorByUuid(Long uuid);

}

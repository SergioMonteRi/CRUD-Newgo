package com.newgo.crudnewgo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.newgo.crudnewgo.entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{

}

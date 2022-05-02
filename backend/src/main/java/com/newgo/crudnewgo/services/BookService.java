package com.newgo.crudnewgo.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.newgo.crudnewgo.dto.BookDTO;
import com.newgo.crudnewgo.entities.Book;
import com.newgo.crudnewgo.repositories.BookRepository;
import com.newgo.crudnewgo.services.exceptions.DataBaseException;
import com.newgo.crudnewgo.services.exceptions.ResourceNotFoundException;

@Service
public class BookService {

	@Autowired
	private BookRepository repository;

	@Transactional(readOnly = true)
	public List<BookDTO> findAll() {
		List<Book> list = repository.findAll();
		return list.stream().map(x -> new BookDTO(x)).collect(Collectors.toList());

	}

	@Transactional(readOnly = true)
	public BookDTO findById(Integer id) {
		Optional<Book> obj = repository.findById(id);
		Book entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new BookDTO(entity);
	}

	@Transactional
	public BookDTO insert(BookDTO dto) {
		Book entity = new Book();
		entity.setAuthor(dto.getAuthor());
		entity.setGenre(dto.getGenre());
		entity.setName(dto.getName());
		entity.setYear(dto.getYear());
		entity = repository.save(entity);
		return new BookDTO(entity);
	}

	@Transactional
	public BookDTO update(Integer id, BookDTO dto) {
		try {
			Book entity = repository.getById(id);
			entity.setAuthor(dto.getAuthor());
			entity.setGenre(dto.getGenre());
			entity.setName(dto.getName());
			entity.setYear(dto.getYear());
			entity = repository.save(entity);
			return new BookDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found" + id);
		}

	}

	public void delete(Integer id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found" + id);
		}
		catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity violation");
		}
	}
}

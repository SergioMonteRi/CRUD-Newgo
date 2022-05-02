package com.newgo.crudnewgo.dto;

import java.io.Serializable;

import com.newgo.crudnewgo.entities.Book;

public class BookDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private int id;
	private String name;
	private String author;
	private String genre;
	private int year;
	
	public BookDTO() {}

	public BookDTO(int id, String name, String author, String genre, int year) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
		this.genre = genre;
		this.year = year;
	}

	public BookDTO(Book entity) {
		super();
		this.id = entity.getId();
		this.name = entity.getName();
		this.author = entity.getAuthor();
		this.genre = entity.getGenre();
		this.year = entity.getYear();
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}
	
	
}

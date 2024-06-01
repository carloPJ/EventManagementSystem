package com.javap.ems.model;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//Datenmodell einer Entität. Kann Validierungen & Geschäftslogik enthalten
@Entity
@Table(name = "ems")
public class Event {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id = 0;
	
	@Column(name = "title", nullable = false, unique = true)
	private String title;
	
	@Column(name = "author")
	private String author;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "location", nullable = false)
	private String location;
	
	@Column(name = "date", nullable = false)
	private LocalDate date;
	
	@Column(name = "created", nullable = false)
	private LocalDate created;

	@Column(name = "category", nullable = false)
	private Category category;

	@Column(name = "rating")
	private float rating;
	
	@Column(name = "likes")
	private int likes;

	public Event() {}

	public Event(String title, String author, String description,
				 String location, LocalDate date, LocalDate created,
				 Category category, float rating, int likes) {
		this.title = title;
		this.author = author;
		this.description = description;
		this.location = location;
		this.date = date;
		this.created = created;
		this.category = category;
		this.rating = rating;
		this.likes = likes;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String place) {
		this.location = place;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalDate getCreated() {
		return created;
	}
	public void setCreated(LocalDate created) {
		this.created = created;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
}

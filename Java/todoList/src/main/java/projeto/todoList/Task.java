package projeto.todoList;

import javax.persistence.Id;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

@Entity
public class Task {
	
	private @Id @GeneratedValue Long id;
	private String description;
	private boolean done;
	
	private Task() {}
	
	public Task(String description, boolean done ) {
		this.description = description;
		this.done = done;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, description, done);
	}
	
	/// Getters
	public Long getId() {
		return id;
	}
	
	public String getDescription() {
		return description;
	}
	
	public boolean getDone() {
		return done;
	}
	
	/// Setters
	public void setId(Long id) {
		this.id = id;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public void setDone(boolean done) {
		this.done = done;
	}

	@Override
	public String toString() {
		return "Task {" + 
				" ID: " + id + 
				", Description: " + description + "\'" + 
				", Done: " + done + "\'" +
				"}";
	}
	
}

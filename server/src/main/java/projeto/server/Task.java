package projeto.server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Task {
	
	@Id 
	@GeneratedValue
	private Long id;
	private String description;
	private boolean done;

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
	
}

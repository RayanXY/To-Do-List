package projeto.todoList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final TaskRepository repository;
	
	@Autowired
	public DatabaseLoader(TaskRepository repository) {
		this.repository = repository;
	}

	public void run(String... string) throws Exception {
		this.repository.save(new Task("Dormir", false));		
	}
	
}

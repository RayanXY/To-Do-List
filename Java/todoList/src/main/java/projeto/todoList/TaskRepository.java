package projeto.todoList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface TaskRepository extends CrudRepository<Task, Long> {
	
}
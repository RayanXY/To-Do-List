package projeto.server;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/tasks")
public class TaskController {

	@Autowired
	TaskService taskService;
	
	/// RETURNS EVERY ITEM ON THE LIST
	@GetMapping
	private List<Task> list() {
		return taskService.showList();
	}
	
	/// SAVE
	@PostMapping
	private void saveTask(@RequestBody Task task) {
		taskService.save(task);
	}
	
	/// UPDATE
	@PutMapping
	private void update(@RequestBody Task task) {
		taskService.update(task);
	}
	
	/// DELETE
	@DeleteMapping("/{id}")
	private void deleteTask(@PathVariable("id") int id) {
		taskService.delete(id);
	}
	
}

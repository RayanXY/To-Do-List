package projeto.server;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	/// SAVE OR UPDATE A TASK ON THE LIST
	@PostMapping()
	private int saveTask(@RequestBody Task task) {
		taskService.saveUpdate(task);
		return task.getId();
	}
	
	/// DELETE A TASK FROM THE LIST
	@DeleteMapping("/{id}")
	private void deleteTask(@PathVariable("id") int id) {
		taskService.delete(id);
	}
	
}

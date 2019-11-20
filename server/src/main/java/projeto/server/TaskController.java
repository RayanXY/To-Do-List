package projeto.server;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class TaskController {

	@RequestMapping("/tasks")
	public Task task() {
		Task task = new Task();
		task.setDescription("Passar em FMC II");
		return task;
	}
	
}

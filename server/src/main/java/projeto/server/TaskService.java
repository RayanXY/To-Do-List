package projeto.server;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Service
public class TaskService {

	@Autowired
	TaskRepository taskRepository;

	/// RETURNS EVERY ITEM ON THE LIST
	public List<Task> showList() {
		return taskRepository.findAll();
	}
	
	/// SAVE
	public void save(Task task) {
		taskRepository.save(task);
	}
	
	/// UPDATE
	public void update(Task task) {
		task.setDone(!task.getDone());
		taskRepository.save(task);
	}
	
	/// DELETE
	public void delete(Integer id) {
		taskRepository.deleteById(id);
	}
	
}

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
	
	/// SAVE OR UPDATE A TASK ON THE LIST
	public void saveUpdate(Task task) {
		taskRepository.save(task);
	}
	
	/// DELETE A TASK FROM THE LIST
	public void delete(Integer id) {
		taskRepository.deleteById(id);
	}
	
}

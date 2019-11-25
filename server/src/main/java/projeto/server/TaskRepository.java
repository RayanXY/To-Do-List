package projeto.server;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface TaskRepository extends JpaRepository<Task, Integer> { }

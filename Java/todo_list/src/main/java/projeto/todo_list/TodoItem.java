package projeto.todo_list;

public class TodoItem {

	private Long id;
	private String todoItem;
	private boolean isDone;
	
	public TodoItem(Long id, String todoItem) {
		this.id = id;
		this.todoItem = todoItem;
		this.isDone = false;
	}
	
	// Getters
	public Long getId() {
		return id;
	}
	
	public String todoItem() {
		return todoItem;
	}
	
	public boolean getIsDone() {
		return isDone;
	}
	
	// Setters
	public void setId(Long id) {
		this.id = id;
	}
	
	public void setTodoItem(String todoItem) {
		this.todoItem = todoItem;
	}
	
	public void setIsDone(boolean isDone) {
		this.isDone = isDone;
	}
	
}

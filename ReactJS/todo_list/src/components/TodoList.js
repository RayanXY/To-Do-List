import React from 'react';
import TodoItem from './TodoItem';
import List from '@material-ui/core/List';

class TodoList extends React.Component {

    render() {
        const { tasks, deleteItem, doneItem } = this.props  

        return (
            <List>
                {
                    tasks.map( task => {
                        return(
                            <TodoItem key={task.id} task={task} deleteItem={deleteItem} doneItem={doneItem} />
                        )
                    })
                }
            </List>
        );
    }
    
}

export default TodoList;

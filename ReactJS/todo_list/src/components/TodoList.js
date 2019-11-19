import React from 'react';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    render() {
        const { staticList, deleteItem, doneItem } = this.props  

        return (
            <List>
                {
                    staticList.map( item => {
                        return(
                            <TodoItem key={item.id} item={item} deleteItem={deleteItem} doneItem={doneItem} />
                        )
                    })
                }
            </List>
        );
    }
    
}

export default TodoList;

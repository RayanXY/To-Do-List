import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class TodoItem extends React.Component {

    render (){

        const { task, deleteItem, doneItem } = this.props;

        return(
            <ListItem>
                
                <ListItemText className={task.done ? "StruckLine" : "Titles"} primary={task.description} />
                
                <IconButton edge="end" onClick={ () => doneItem(task.id)} >
                    <DoneIcon color=""/>
                </IconButton>

                <IconButton edge="end" onClick={() => deleteItem(task.id)}>
                    <DeleteIcon color="secondary" />
                </IconButton>

            </ListItem>
        );

    }
    
}

export default TodoItem;

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

class TodoItem extends React.Component {

    render (){

        const { item, deleteItem, doneItem } = this.props;

        return(
            <ListItem>
                
                <ListItemText primary={item.task} />
                
                <IconButton edge="end" onClick={() => doneItem(item.id)}>
                    <DoneIcon />
                </IconButton>

                <IconButton edge="end">
                    <EditIcon />
                </IconButton>

                <IconButton edge="end" onClick={() => deleteItem(item.id)}>
                    <DeleteIcon color="secondary" />
                </IconButton>

            </ListItem>
        );

    }
    
}

export default TodoItem;

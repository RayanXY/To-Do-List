import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save';

class AddTodoItem extends React.Component {

    constructor(props){
        
        super(props);
        this.state = {
            task: "",
        };

    }

    handleChange = e => {
        this.setState({
            task: e.target.value,
        });
    }

    render () {

        const { addItem } = this.props 

        return (
            <div className="Task">
                <TextField placeholder="Nova tarefa" onChange={this.handleChange}/>
                <IconButton onClick={() => addItem(this.state.task)}
                >
                    <SaveIcon />
                </IconButton>
            </div>
        );

    }

}

export default AddTodoItem;

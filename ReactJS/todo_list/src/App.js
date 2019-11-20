import './App.css';
import React from 'react';
import axios from 'axios';
import Titles from './components/Titles';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';

/*
const staticList = [
    {id: 1, task: 'Um', done: false},
    {id: 2, task: 'Dois', done: false},
    {id: 3, task: 'Três', done: false},
    {id: 4, task: 'Quatro', done: false},
];
*/

class App extends React.Component {
    
    state={
        list: []
    }

    componentDidMount(){
        
        axios.defaults.headers.common['Content-type'] = "application/json";
        axios.get("http://localhost:8080/tasks").then(response => {
            const task = response.data;
            const newList = [...this.state.list].map( l => Object.assign({}, l));
            newList.push(task);
            this.setState({list: newList})
        });  

    }

    /* 
     * ADICIONAR ITEM
     * Recebe a tarefa, atribui a um ID e a insere na lista
     * @param newTask - a nova tarefa passada pelo usuário
     */
    addItem = (newTask) => {
        this.newId++;
        const newItem = {id: this.newId, task: newTask, done: false};
        const newList = [...this.state.list].map( l => Object.assign({}, l));
        newList.push(newItem);
        this.setState({list: newList});
    }

    /* 
     * DELETAR ITEM
     * Deleta o item com o ID passado
     * @param id - O ID da tarefa a ser excluída
     */
    deleteItem = (id) =>{
        const newList = [...this.state.list].map( l => Object.assign({}, l)).filter( l => l.id !== id)
        this.setState({list: newList});
    }

    /* 
     * ITEM FEITO
     * Atualiza a tarefa para 'feita'
     * @param id - O ID da tarefa concluída
     */
    doneItem = (id) => {
       const newList = [...this.state.list].map( l => Object.assign({}, l));
        newList.forEach((item) => {
            if(item.id === id){
                item.done = true;
            }
        });
        this.setState({list: newList});
    }

    render() {

        return(

            <div className="ToDo_List">

                <Titles title="To-Do List" size={34} />

                <Titles title="Tarefas" size={24} />
                
                <TodoList tasks={this.state.list} deleteItem={this.deleteItem} doneItem={this.doneItem}/>

                <Titles title="Adicionar tarefa" size={24} />

                <AddTodoItem addItem={this.addItem} />

            </div>
            
        );
        
    }
    
}

export default App;

import './App.css';
import React from 'react';
import axios from 'axios';
import Titles from './components/Titles';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';

class App extends React.Component {
    
    state={
        list: []
    }

    getListFromBD(){
        axios.get("http://localhost:8080/tasks").then(response => response.data)
            .then((data) => {
                this.setState({ list: data });
                console.log(this.state.list);
            })
    }

    componentDidMount(){
        
        this.getListFromBD();
        /*axios.get("http://localhost:8080/tasks").then(response => response.data)
            .then((data) => {
                this.setState({ list: data });
                console.log(this.state.list);
            })*/

    }

    /* 
     * ADICIONAR ITEM
     * Recebe a tarefa, atribui a um ID e a insere na lista
     * @param newTask - a nova tarefa passada pelo usuário
     */
    addItem = (newTask) => {
        const item = {id: 0, description: newTask, done: 0};
        axios.post("http://localhost:8080/tasks", item)
             .then(res => {
                 console.log(res.data);
                 this.getListFromBD();
             })
        /*this.newId++;
        const newItem = {id: this.newId, task: newTask, done: false};
        const newList = [...this.state.list].map( l => Object.assign({}, l));
        newList.push(newItem);
        this.setState({list: newList});*/
    }

    /* 
     * DELETAR ITEM
     * Deleta o item com o ID passado
     * @param id - O ID da tarefa a ser excluída
     */
    deleteItem = (id) =>{
        axios.delete(`http://localhost:8080/tasks/${id}`)
        .then(res => {
            console.log(res.data);
            this.getListFromBD();
        });
        
        /*const newList = [...this.state.list].map( l => Object.assign({}, l)).filter( l => l.id !== id)
        this.setState({list: newList});*/
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
                
                <TodoList list={this.state.list} deleteItem={this.deleteItem} doneItem={this.doneItem}/>

                <Titles title="Adicionar tarefa" size={24} />

                <AddTodoItem addItem={this.addItem} />

            </div>
            
        );
        
    }
    
}

export default App;

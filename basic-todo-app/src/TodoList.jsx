import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone:false }]);
    let [newTodos, setNewTodos] = useState("");

    let addNewTasks = () => {
        setTodos((prevTodos) => {
            return ([...prevTodos, { task: newTodos, id: uuidv4() ,isDone:false}]);
        })
        setNewTodos("");
    }

    let updateTodo = (event) => {
        setNewTodos(event.target.value);

    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllAsDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todos) => {
                return {
                    ...todos,
                   isDone:true,
                }
            })
        );

    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todos) => {
                if (todos.id === id) {

                    return {
                        ...todos,
                       isDone:true,
                    }
                }
                else{
                    return todos;
                }
            })
        );
    }


    return (
        <div>
            <input type="text" placeholder="Add a task" value={newTodos} onChange={updateTodo} />
            <br /> <br />
            <button onClick={addNewTasks}>Add</button>

            <br /><br /><br /><br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {todos.map((todos) => (
                    <li key={todos.id}>
                        <span style={todos.isDone ? {textDecorationLine:"line-through"}:{}}> {todos.task}</span>
                        &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todos.id)}>Delete</button>
                        <button onClick={() => markAsDone(todos.id)}>Mark As Done</button>

                    </li>
                ))}
            </ul>

            <button onClick={markAllAsDone} style={todos.isDone ? {textDecorationLine:"line-through"}:{}}>Mark All Task As Done</button>
        </div>
    )
}
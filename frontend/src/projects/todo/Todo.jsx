import {  useState } from "react"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import "./Todo.css"
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";
import { Link } from "react-router-dom";



export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageTodoData());


    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;
        // if (task.includes(content)) return;
        const ifTodoContentMatched = task.find(
            (currTask) => currTask.content === content
        )

        if(ifTodoContentMatched) return;
        if (!content) return;
        setTask((prev) => [...prev, {id, content, checked}])
    }

    setLocalStorageTodoData(task)


    const handleDelete = (value) => {
        const updatedTask = task.filter((currTask) => currTask.content !== value);  
        setTask(updatedTask);
    }


    // add data to localstorage


    const handleClearAll = () => {
        setTask([]);
        console.log(task);
    }

    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((currTask) => {
            if(currTask.content === content) return {...currTask, checked : !currTask.checked}
            else return currTask;
        })

        setTask(updatedTask);
    }   


    return (

        <section className="todo-container">
            <header>
                <h1><Link to={"/"} >MindMaze</Link> Tasking</h1>
            </header>
           
            <TodoDate />

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask) => {
                            return <TodoList key={currTask.id} 
                            data = {currTask.content} 
                            onHandleDeleteTodo = {handleDelete} 
                            checked = {currTask.checked}
                            onHandleCheckedTodo = {handleCheckedTodo}
                            />
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearAll} >Clear All</button>
            </section>
        </section>
    )
}
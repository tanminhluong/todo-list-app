import React, {useState} from 'react';
import { Button, TextField} from '@material-ui/core'

import {v4 as uuid} from 'uuid';


function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        isCompleted: false,
    });

    function handeTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }
    
    function handeSubmit (e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuid()});

            setTodo({...todo, task: ""})
        }
    }

    return (
        <form className="todo-form" onSubmit={handeSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handeTaskInputChange}

            />
            <Button type="submit">ADD</Button>
        </form>
    );
}

export default TodoForm;
import React from 'react';
import {ListItem, Checkbox, IconButton, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function Todo({todo, toggleComplete, removeTodo}) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemove(){
        removeTodo(todo.id);
    }

    return (
        <ListItem style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Checkbox checked={todo.isCompleted} onClick={handleCheckboxClick} />
            <Typography style={{
                textDecoration: todo.isCompleted ? 'line-through' : null,
                opacity: todo.isCompleted ? '0.5' : '1',
                width: 200
            }}>{todo.task}</Typography>
            <IconButton onClick={handleRemove}>
               <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default Todo;
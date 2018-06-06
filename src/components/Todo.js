import React from 'react';

const Todo = props => {
    return (
        <li>
            {props.content.text}
        </li>
    )
}

export default Todo;
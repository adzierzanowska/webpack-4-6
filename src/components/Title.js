import React from 'react';

const Title = props => {
    return (
        <div>
            <h1>To do App</h1>
            <h3>Tasks to do {props.number}</h3>
        </div>
    )
};

export default Title;
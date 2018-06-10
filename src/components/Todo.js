import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <li key={this.props.content.id} className={style.todo}>
                {this.props.content.text}
                <div>
                    <a href="#" id="start" className={style.button}
                        onClick={this.props.remove(this.props.content.id)}>X</a>
                </div>
            </li>
        );
    }
}

export default Todo;

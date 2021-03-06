import React from 'react';
import uuid from 'uuid';
import {hot} from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'go swimming',
                }, {
                    id: 2,
                    text: 'eat something delicious',
                }, {
                    id: 3,
                    text: 'take a nap',
                },
            ],
        };
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        return () => {
            const remainder = this.state.data.filter(todo => todo.id !== id);
            this.setState({data: remainder});
        };
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title number={this.state.data.length}/>
                <TodoList
                    items={this.state.data}
                    remove={(id) => this.removeTodo(id)}/>
            </div>
        );
    }
}

export default hot(module)(App);

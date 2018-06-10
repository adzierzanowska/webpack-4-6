import React from 'react';
import style from './TodoList.css';
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.getListItem = this.getListItem.bind(this);
    }

    getListItem () {
        return this.props.items.map(item => (<Todo content={item} key={item.id} remove={this.props.remove} className={style.item}/>));
    }

    render () {
        console.log("this.getListItem ", this.getListItem);
        console.log("this.getListItem() ", this.getListItem());
        return (
            <ul className={style.TodoList}>
                {this.getListItem()}
            </ul>

        );
    }
}


export default TodoList;

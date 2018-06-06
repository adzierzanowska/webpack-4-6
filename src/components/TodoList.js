import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        console.log("constructor props ", props);
        super(props);
    }
    get listItem() {
        console.log("this.props ", this.props);
        console.log("super.props ", super.props);

        return this.props.items.map(item => <Todo content={item} key={item.id} remove={this.props.remove} className={style.item}/>);
    }
    render() {
        return (
            <ul className={style.TodoList}>
                {this.listItem}
            </ul>
            
        );
    }
    
}


/*handleClick() {
    console.log('this is:', this);
    return <TodoList remove={this.props.remove.item} /> 
  }

  render() {
    
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }  */

export default TodoList;

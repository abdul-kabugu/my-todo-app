import React, { Component } from "react";
import TodosItem from "./TodosItem";
import styles from "./styles.css";
import todos from "./TodosData";

class App extends Component {
  constructor() {
    super();
  }

  handleClick = () => {
    console.log("changed");
  };
  render() {
    const mappedTodos = todos.map((todo) => {
      return (
        <TodosItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          changed={this.handleClick}
        />
      );
    });

    return (
      <div>
        <h1> my todo app</h1>
        {mappedTodos}
      </div>
    );
  }
}

export default App;

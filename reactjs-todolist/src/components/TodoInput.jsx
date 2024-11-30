import { useState } from "react";

export default function TodoInput(props) {
    const { handleAddTodo, todoItem, setTodoItem } = props;


    return (
        <header>
            <input value={todoItem} type="text" placeholder="Enter todo..." onChange={(eve => {
                setTodoItem(eve.target.value);
            })} />

            <button onClick={() => {
                handleAddTodo(todoItem);
                setTodoItem("");
            }}>
                Add
            </button>
        </header>
    );
}
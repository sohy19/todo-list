import React from "react";
import TodoItem from "./TodoItem";

function TodoItemList({ todos, onToggle, onRemove }) {
	const todoList = todos.map(({ id, text, checked, color }) => (
		<TodoItem
			id={id}
			text={text}
			checked={checked}
			onToggle={onToggle}
			onRemove={onRemove}
			key={id}
			color={color}
		/>
	));
	return <div>{todoList}</div>;
}

export default TodoItemList;

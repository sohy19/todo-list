import React, { useState } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Palette from "./components/Palette";

const App = () => {
	const [id, setId] = useState(3);
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([
		{ id: 0, text: "리액트 소개", checked: false },
		{ id: 1, text: "JSX 사용해보기", checked: true },
		{ id: 2, text: "라이프 사이클 이해하기", checked: false },
	]);

	const [nowColor, setNowColor] = useState("#343a40");

	const colorList = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

	const handleChange = (e) => setInput(e.target.value);

	const handleCreate = () => {
		const todo = todos.concat({
			id: id,
			text: input,
			checked: false,
			nowColor: nowColor,
		});
		setId(id + 1);
		setTodos(todo);
		setInput("");
	};

	const handelKeyPress = (e) => {
		if (e.key === "Enter") {
			handleCreate();
		}
	};

	const handleToggle = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const selected = todos[index];
		const nextTodos = [...todos];
		nextTodos[index] = {
			...selected,
			checked: !selected.checked,
		};
		setTodos(nextTodos);
	};

	const handelRemove = (id) => {
		const nextTodos = todos.filter((todo) => todo.id !== id);
		setTodos(nextTodos);
	};

	const handleClick = (nowColor) => {
		setNowColor(nowColor);
	};

	return (
		<div className="App">
			<TodoListTemplate
				form={
					<Form
						value={input}
						onChange={handleChange}
						onKeyPress={handelKeyPress}
						onCreate={handleCreate}
						nowColor={nowColor}
					/>
				}
				palette={
					<Palette
						colorList={colorList}
						onClick={handleClick}
						nowColor={nowColor}
					/>
				}
			>
				<TodoItemList
					todos={todos}
					onToggle={handleToggle}
					onRemove={handelRemove}
				/>
			</TodoListTemplate>
		</div>
	);
};

export default App;

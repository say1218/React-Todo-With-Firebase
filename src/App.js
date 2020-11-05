import React, { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import db from "./firebase";
import firebase from "firebase";

/*MATERIAL COMPONENTS*/
import { Button, TextField } from "@material-ui/core";

function App() {
	const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState("");

	useEffect(() => {
		db.collection("todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setTodos(
					snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() }))
				);
			});
		//console.log("array", todos);
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		db.collection("todos").add({
			todo: todoInput,
			state: false,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		//setTodos([...todos, todoInput]);
		setTodoInput("");
	};
	return (
		<div className='App'>
			<h1>TODO LIST</h1>
			<form>
				<TextField
					id='todo'
					label='Enter Task'
					variant='outlined'
					value={todoInput}
					onChange={(e) => setTodoInput(e.target.value)}
				/>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					disabled={!todoInput}
					value={todoInput}
					onClick={addTodo}>
					Add ToDo
				</Button>
			</form>

			<ul>
				{todos.map((i) => (
					<TodoItem item={i} key={i.id} />
				))}
			</ul>
		</div>
	);
}

export default App;
// {/* <TodoItem item={i} key={i.todo} /> */}

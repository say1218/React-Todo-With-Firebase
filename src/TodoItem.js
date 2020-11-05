import React from "react";
import db from "./firebase";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import { makeStyles } from "@material-ui/core/styles";
import {
	Button,
	Card,
	CardContent,
	CardActions,
	Typography,
	FormControlLabel,
	Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 275,
		marginBottom: 12,
	},
	content: {
		paddingBottom: 0,
	},
});

const TodoItem = (props) => {
	const classes = useStyles();
	let { todo, state } = props.item.todo;
	let { id } = props.item;

	const handleChange = (event) => {
		db.collection("todos").doc(id).set(
			{
				state: event.target.checked,
			},
			{ merge: true }
		);
	};

	const deleteTodo = (event) => {
		db.collection("todos").doc(id).delete();
	};

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Typography variant='h5' component='h2'>
					<FormControlLabel
						control={
							<Checkbox
								icon={<CheckBoxOutlineBlankIcon />}
								checkedIcon={<CheckBoxIcon />}
								name='checked'
								checked={state}
								onChange={handleChange}
							/>
						}
						label={todo}
					/>
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' onClick={deleteTodo}>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default TodoItem;

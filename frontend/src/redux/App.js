import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "./redux/todoSlice";
import { Button, TextField, List, ListItem, ListItemText } from "@mui/material";

function App() {
    const [newTodo, setNewTodo] = useState("");
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div>
            <TextField value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <Button onClick={() => { dispatch(addTodo(newTodo)); setNewTodo(""); }}>Add</Button>
            <List>
                {todos.map((todo) => (
                    <ListItem key={todo._id} onClick={() => dispatch(updateTodo({ id: todo._id, completed: !todo.completed }))}>
                        <ListItemText primary={todo.title} secondary={todo.completed ? "Completed" : "Pending"} />
                        <Button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default App;

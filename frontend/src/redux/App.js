import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "./redux/todoSlice";
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Checkbox, Typography, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
    const dispatch = useDispatch();
    const { todos, loading } = useSelector((state) => state.todos);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        if (newTodo.trim() === "") return;
        dispatch(addTodo(newTodo));
        setNewTodo(""); // Clear input after adding
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    TODO App
                </Typography>

                {/* Input Field and Add Button */}
                <div style={{ display: "flex", marginBottom: "20px" }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Add a new task"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddTodo} style={{ marginLeft: "10px" }}>
                        Add
                    </Button>
                </div>

                {/* Show Loading */}
                {loading && <Typography align="center">Loading...</Typography>}

                {/* Todo List */}
                <List>
                    {todos.map((todo) => (
                        <ListItem key={todo._id} divider>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo._id))}
                            />
                            <ListItemText
                                primary={todo.text}
                                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                            />
                            <IconButton edge="end" color="secondary" onClick={() => {
                                if (window.confirm("Are you sure you want to delete this task?")) {
                                    dispatch(deleteTodo(todo._id));
                                }
                            }}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default App;

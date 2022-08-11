import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import SearchComponent from "./SearchComponent";
import TodoList from "./TodoList";

function TodoApp({ darkModeStatus: [isDarkMode, setIsDarkMode] }) {
  const [todoItems, setTodoItems] = useState([]);
  const [initialRender, setinitialRender] = useState(true);
  const [takeTour, setTakeTour] = useState(0);

useEffect(() => {
  function sortTodoList() {
    todoItems.sort((a, b) => a.dateModified.getTime() - b.dateModified.getTime())
  }
  sortTodoList()
}, [todoItems])

  // On render, check if user has take tour previously
  if (takeTour === 4) {
    localStorage.setItem("doneTour", "true");
  }
  useEffect(() => {
    const userTourStatus = localStorage.getItem("doneTour");
    if (!userTourStatus) setTakeTour(1);
  }, []);
  const removeItem = (id) => {
    setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const editItem = (id, newTitle) => {
    const newState = todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: newTitle,
          dateModified: new Date(),
          done: false,
        };
      }
      return item; // if no item found
    });
    setTodoItems(newState);
  };
  const toggleItemCompletedStatus = (itemId) => {
    const newState = todoItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });

    setTodoItems(newState);
  };

  return (
    <Container className="p-5">
      <Navbar
        darkModeStatus={[isDarkMode, setIsDarkMode]}
        tourStatus={takeTour}
      />
      <SearchComponent
        updateTodoItems={setTodoItems}
        darkModeStatus={isDarkMode}
        tourStatus={[takeTour, setTakeTour]}
      />
      <TodoList
        todoState={[todoItems, removeItem, editItem, toggleItemCompletedStatus]}
        darkModeStatus={isDarkMode}
        initialRender={setinitialRender}
        tourStatus={[takeTour, setTakeTour]}
      />
    </Container>
  );
}

export default TodoApp;

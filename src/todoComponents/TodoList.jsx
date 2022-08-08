import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList({ todoState: [todoItems, removeItem, editItem, toggleItemCompletedStatus], darkModeStatus }) {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoListItem
          todoItem={item}
          key={item.id}
          removeItem={removeItem}
          editItem={editItem}
          darkModeStatus={darkModeStatus}
          toggleItemCompletedStatus={toggleItemCompletedStatus}
        />
      ))}
    </div>
  );
}

export default TodoList;

import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList({ todoState: [todoItems, removeItem, editItem, toggleItemCompletedStatus], darkModeStatus, initialRender, tourStatus }) {
 
  return (
    <div>
      {todoItems.length ? todoItems.map((item) => (
        <TodoListItem
          todoItem={item}
          key={item.id}
          removeItem={removeItem}
          editItem={editItem}
          darkModeStatus={darkModeStatus}
          toggleItemCompletedStatus={toggleItemCompletedStatus}
          initialRender={initialRender}
          tourStatus={tourStatus}
        />
      )) : <p className={`${darkModeStatus ? 'text-white' : ''}`}>{`No Item added yet.`}</p>}
    </div>
  );
}

export default TodoList;

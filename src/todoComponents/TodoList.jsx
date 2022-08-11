import React, { memo } from "react";
import TodoListItem from "./TodoListItem";
import { AnimatePresence } from "framer-motion";

function TodoList({
  todoState: [todoItems, removeItem, editItem, toggleItemCompletedStatus],
  darkModeStatus,
  initialRender,
  tourStatus,
}) {
  return (
    <div>
      {todoItems.length ? (
        todoItems.map((item) => (
          <AnimatePresence key={item.id}>
            <TodoListItem
              todoItem={item}
              removeItem={removeItem}
              editItem={editItem}
              darkModeStatus={darkModeStatus}
              toggleItemCompletedStatus={toggleItemCompletedStatus}
              initialRender={initialRender}
              tourStatus={tourStatus}
            />
          </AnimatePresence>
        ))
      ) : (
        <p
          className={`${darkModeStatus ? "text-white" : ""}`}
        >{`No Item added yet.`}</p>
      )}
    </div>
  );
}

export default memo(TodoList);

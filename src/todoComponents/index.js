import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import SearchComponent from "./SearchComponent";
import TodoList from "./TodoList";

// function sortTodoList(items) {
//   items.sort(function (a, b) {
//     if (a.done < b.done) {
//       return -1;
//     } // sort undone items to top
//     if (a.done > b.done) {
//       return 1;
//     }
//     if (a.dateModified > b.dateModified) {
//       // else sort by date
//       return -1;
//     }
//     return 0;
//   });
// const newArr = [...todoItems]
//     // Sort by date modified
//     newArr.sort(function (a, b) {
//       if (a.dateModified > b.dateModified) {
//         return 1;
//       }
//       // else sort undone items first
//       return a.done - b.done
//     });
//     setTodoItems(newArr)
// }

function TodoApp({ darkModeStatus: [isDarkMode, setIsDarkMode] }) {
  const [todoItems, setTodoItems] = useState([
    {
      id: "1",
      title: "Do the dishes",
      done: false,
      dateModified: new Date(),
      dueDate: new Date(),
    },
    {
      id: "2",
      title: "Do the laundry",
      done: true,
      dateModified: new Date(),
      dueDate: new Date(),
    },
    {
      id: "3",
      title: "Book appointment with Dr. Brenner",
      done: false,
      dateModified: new Date(),
      dueDate: new Date("2022", "1", "27"),
    },
  ]);
  const [initialRender, setinitialRender] = useState(true)

  useEffect(() => {
    function sortList(items) {
      const newArr = [...items]; // make copy of state items
      newArr.sort(function (a, b) {
        // Sort by date modified
        if (a.dateModified > b.dateModified) {
          return 1;
        }
        // else sort undone items first
        return a.done - b.done;
      });
      return newArr
    }
    console.log("Re-render");
    if (initialRender)
      setTodoItems(prevItems => sortList(prevItems))
      setinitialRender(false)
  }, [initialRender]);
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
      <Navbar darkModeStatus={[isDarkMode, setIsDarkMode]} />
      <SearchComponent
        updateTodoItems={setTodoItems}
        darkModeStatus={isDarkMode}
      />
      <TodoList
        todoState={[todoItems, removeItem, editItem, toggleItemCompletedStatus]}
        darkModeStatus={isDarkMode}
        initialRender={setinitialRender}
      />
    </Container>
  );
}

export default TodoApp;

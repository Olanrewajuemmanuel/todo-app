import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from 'framer-motion'

import "react-datepicker/dist/react-datepicker.css";

function SearchComponent({ updateTodoItems }) {
  const [dueDate, setDueDate] = useState(new Date());
  const [title, setTitle] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (title === "") return; // title can't be null
    // date can be before today
    if(dueDate.getTime() < new Date().getTime()) {
      alert("Invalid date") // TODO: change to modal, maybe
      return;
    }
    updateTodoItems((prevItems) => [
      ...prevItems,
      { id: Math.random(), title, dateModified: new Date(), dueDate },
    ]);
    setTitle('')
    setDueDate(new Date())
  };
  // const handleSelect = () => {
  //   if(dueDate.getTime() < new Date().getTime()) {
  //     alert("Invalid date") // TODO: change to modal, maybe
  //   }
  // };

  return (
    <div>
      <form onSubmit={handleSubmit} className='mb-5'>
        <div className="form-grp">
          <input
            type="text"
            name="search"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            placeholder="Meeting with Dr. Dre"
            autoComplete="off"
          />
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            showTimeInput
            wrapperClassName="react-datepicker"
          />
        </div>
        <motion.button whileTap={{ scale: 0.9 }} whileHover={{ opacity: .9 }} transition={{ ease: 'easeOut' }} type="submit" className="btn-accent">Add</motion.button>
      </form>
    </div>
  );
}

export default SearchComponent;

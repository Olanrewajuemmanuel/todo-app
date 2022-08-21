import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";

import "react-datepicker/dist/react-datepicker.css";
import TourModal from "./TourModal";
import ErrorModal from "./ErrorModal";

function SearchComponent({
  updateTodoItems,
  tourStatus: [takeTour, setTakeTour],
}) {
  const [dueDate, setDueDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [isInvalidDate, setIsInvalidDate] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (title === "") return; // title can't be null
    // date can be before today
    if (dueDate.getTime() < new Date().getTime()) {
      setIsInvalidDate(true);
      return; // DO NOTHING
    }

    updateTodoItems((prevItems) => {
      // insert new item to front of list
      console.log(prevItems);
      const newState = [...prevItems];
      newState.unshift({
        id: Math.random(),
        title,
        dateModified: new Date(),
        dueDate,
      });
      return newState;
    });

    // Reset form
    setTitle("");
    setDueDate(new Date());

    // if on tour, move to next step
    if (takeTour < 2) {
      setTakeTour(4); // User skipped taking the Tour
    } else {
      setTakeTour((step) => step + 1);
    }
  };

  return (
    <div>
      {/* Invalid date modal */}
      {isInvalidDate ? (
        <ErrorModal
          msg={`Date should be between now and the future.`}
          setVisibility={setIsInvalidDate}
        />
      ) : null}
      <form onSubmit={handleSubmit} className="mb-5">
        {takeTour === 1 ? (
          <TourModal
            msg={`Set the title and date for your appointments, bookings and schedule here.`}
            changeTourStatus={setTakeTour}
            step={takeTour}
          />
        ) : (
          ""
        )}
        {takeTour === 3 ? (
          <TourModal
            msg={`Double click an item, to toggle completion. Completed items are moved to the bottom.`}
            changeTourStatus={setTakeTour}
            step={takeTour}
          />
        ) : (
          ""
        )}
        <div
          className={`form-grp ${takeTour === 1 ? "tour-input-focus" : null}`}
        >
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

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ opacity: 0.9 }}
          transition={{ ease: "easeOut" }}
          type="submit"
          className={`btn-accent ${takeTour === 2 ? "tour-btn-focus" : null} `}
        >
          Add
        </motion.button>
      </form>
    </div>
  );
}

export default SearchComponent;

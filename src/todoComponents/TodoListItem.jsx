import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
import { motion } from "framer-motion";

const darkModeStyles = {
  text: "text-white",
  accent: "text-accent",
  background: "bg-white-shade",
};

function TodoListItem({
  todoItem,
  removeItem,
  editItem,
  darkModeStatus,
  toggleItemCompletedStatus,
  initialRender
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newTitle, setnewTitle] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (isEditMode) inputRef.current.select();
  }, [isEditMode]);

  const handleEditSubmit = (ev, itemId) => {
    ev.preventDefault();
    if (newTitle === "") return;
    editItem(itemId, newTitle);
    setIsEditMode(false);
  };
  const handleDoubleClick = (itemId) => {
    toggleItemCompletedStatus(itemId);
    initialRender(true)
  };
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onDoubleClick={() => handleDoubleClick(todoItem.id)}
    >
      <Row
        className={[
          darkModeStatus ? "bg" : `${darkModeStyles.background}`,
          "py-3",
          "px-2",
          "my-3",
          "cursor-pointer",
        ]}
      >
        <Col lg={8} xs={4}>
          {isEditMode ? (
            <form onSubmit={(e) => handleEditSubmit(e, todoItem.id)}>
              <input
                type="text"
                name="edit"
                onChange={(e) => setnewTitle(e.target.value)}
                defaultValue={todoItem.title}
                ref={inputRef}
              />
            </form>
          ) : (
            <p
              className={`${todoItem.done ? "text-strikethrough" : ""} ${
                darkModeStatus ? darkModeStyles.text : ""
              } `}
              style={{ userSelect: "none" }}
            >
              {todoItem.title}
            </p>
          )}
        </Col>
        <Col className="d-flex">
        {/* Edit button */}
          <motion.button
            whileHover={{ scale: 1.2, transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              repeatDelay: 1,
              ease: "easeIn",
            } }}
            className="me-4 btn-upd"
            onClick={() => setIsEditMode(!isEditMode)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.37725 25C1.18693 24.9997 0.998754 24.9597 0.824698 24.8827C0.650643 24.8057 0.494512 24.6933 0.366234 24.5527C0.235637 24.4132 0.135983 24.2477 0.0738063 24.0671C0.0116299 23.8864 -0.011664 23.6946 0.00545167 23.5043L0.341542 19.8077L15.8675 4.28294L20.7196 9.13494L5.19771 24.6583L1.50208 24.9945C1.46058 24.9983 1.41892 25.0002 1.37725 25ZM21.6881 8.16481L16.8374 3.31282L19.747 0.40244C19.8744 0.27486 20.0257 0.17365 20.1922 0.104596C20.3588 0.0355429 20.5373 0 20.7175 0C20.8978 0 21.0763 0.0355429 21.2429 0.104596C21.4094 0.17365 21.5607 0.27486 21.6881 0.40244L24.5977 3.31282C24.7252 3.44025 24.8264 3.59159 24.8954 3.75817C24.9645 3.92475 25 4.1033 25 4.28363C25 4.46395 24.9645 4.64251 24.8954 4.80909C24.8264 4.97567 24.7252 5.127 24.5977 5.25444L21.6895 8.16344L21.6881 8.16481Z"
                fill={`${darkModeStatus ? "#FF4673" : "#353535"}`}
              />
            </svg>
          </motion.button>
          {/* Delete button */}
          <motion.button
            whileHover={{ scale: 1.2, transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              repeatDelay: 1,
              ease: "easeIn",
            } }}
            className="btn-upd"
            onClick={() => removeItem(todoItem.id)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.475 0L12.5 8.975L3.525 0L0 3.525L8.975 12.5L0 21.475L3.525 25L12.5 16.025L21.475 25L25 21.475L16.025 12.5L25 3.525L21.475 0Z"
                fill={`${darkModeStatus ? "#FF4673" : "#353535"}`}
              />
            </svg>
          </motion.button>
        </Col>
        <Col>
          <p className={`text-mute`} style={{ userSelect: "none" }}>
            Due {moment(todoItem.dueDate).fromNow()}
          </p>
        </Col>
      </Row>
    </motion.div>
  );
}

export default TodoListItem;

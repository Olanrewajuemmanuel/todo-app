import React from "react";
import { motion } from "framer-motion";

function ToggleMode({ darkModeStatus: [isDarkMode, setIsDarkMode] }) {
  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode)
    // Save user preference
    localStorage.setItem('mode', !isDarkMode) // the opposite shows the current mode
  }
  
  
  return (
    <motion.div
      className="toggle_btn"
      onClick={handleToggleMode}
      style={{ justifyContent: isDarkMode ? "flex-end" : "" }}
    >
      <motion.span layout transition={spring}></motion.span>
    </motion.div>
  );
}
const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export default ToggleMode;

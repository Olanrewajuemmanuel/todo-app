import React from "react";
import { motion } from "framer-motion";

function TourModal({ msg, changeTourStatus, step }) {
  return (
    <motion.div
      className="tour-modal"
      initial={{ y: "30%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .3, type: 'ease' }}
    >
      <p style={{ maxWidth: "300px" }}>{msg}</p>
      <button
        className="nav-modal-btn float-right"
        onClick={() => changeTourStatus((step) => step + 1)}
      >
        {step === 3 ? "Finish" : "Next"}
      </button>
    </motion.div>
  );
}

export default TourModal;

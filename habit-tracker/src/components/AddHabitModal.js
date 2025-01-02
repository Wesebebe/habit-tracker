import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const AddHabitModal = ({ isOpen, onClose, onAddHabit }) => {
  const [habitName, setHabitName] = useState("");

  const handleAddHabit = () => {
    if (habitName.trim()) {
      onAddHabit(habitName);
      setHabitName("");
      onClose();
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white rounded-lg p-6 shadow-lg max-w-sm mx-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold mb-4">Add New Habit</h2>
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Habit Name"
          className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleAddHabit}
            className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
          >
            Add Habit
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default AddHabitModal;

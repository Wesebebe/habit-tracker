import React, { useState } from "react";
import Modal from "react-modal";

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
      <h2 className="text-lg font-semibold mb-4">Add New Habit</h2>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Habit Name"
        className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <div className="flex justify-between">
        <button
          onClick={handleAddHabit}
          className="bg-green-500 text-white py-1px-4 rounded hover:bg-green-600"
        >
          Add Habit
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-1px-4 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

// const modalStyles = {
//     content: {
//         top:'50%',
//         left:'50%',
//         right:'auto',
//         bottom:'auto',
//         marginRight:'-50%',
//         transform:'translate(-50%, -50%)',
//         padding:'20px',
//         width:'300px',
//         textAlign:'center'
//     }
// }

// const styles = {
//     input:{width:'100%',padding:'10px',marginBottom:'10px'},
//     button:{padding:'10px',marginRight:'10px',cursor:'pointer'}

export default AddHabitModal;

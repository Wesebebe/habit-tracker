import { motion } from "framer-motion";

const HabitList = ({ habits, setHabits }) => {
  const toggleCompletion = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Habits</h2>
      <motion.ul
        className="space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {habits.map((habit) => (
          <motion.li
            key={habit.id}
            className={`flex flex-wrap justify-between items-center p-4 border rounded-lg ${
              habit.completed ? "bg-green-100" : "bg-gray-100"
            }`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`${
                habit.completed ? "line-through text-gray-500" : "text-gray-900"
              }`}
            >
              {habit.name}
            </span>
            <button
              onClick={() => toggleCompletion(habit.id)}
              className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
            >
              {habit.completed ? "Undo" : "Complete"}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default HabitList;

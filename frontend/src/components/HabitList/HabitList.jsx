import React, { useState } from "react";
import "./HabitList.css";

const HabitList = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Excercise", completed: false },
    { id: 2, name: "Read", completed: true },
  ]);

  const toggleCompletion = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="habit-list">
      <h2>Your Habits</h2>
      <ul className="list">
        {habits.map((habit) => (
          <li key={habit.id} className="habit">
            <span
              style={{
                textDecoration: habit.completed ? "line-through" : "none",
              }}
            >
              {habit.name}
            </span>
            <button onClick={() => toggleCompletion(habit.id)}>
              {habit.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;

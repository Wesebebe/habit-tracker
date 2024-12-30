import React, { useState } from "react";
import "./HabitList.css";

const HabitList = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Excercise", completed: false },
    { id: 2, name: "Read", completed: true },
  ]);

  return (
    <div className="habit-list">
      <h2>Your Habits</h2>
      <ul className="list">
        {habits.map((habit) => (
          <li key={habit.id} className="habit">
            <span>{habit.name}</span>
            <button>{habit.completed ? "Undo" : "Complete"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;

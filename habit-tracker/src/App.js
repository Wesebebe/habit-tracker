import React, { useCallback, useState } from 'react'
import Header from './components/Header'
import HabitList from './components/HabitList'
import AddHabitModal from './components/AddHabitModal'


const App = () => {
  const [habits,setHabits] = useState([])
  const[isModalOpen, setIsModalOpen] = useState(false)

  const addHabit = useCallback((name) => {
    const newHabit = {id: Date.now(), name, completed: false};
    setHabits((prev) => [...prev, newHabit])
  },[])

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  },[]);

  return (
    <div>
      <Header />
      <button onClick={() => setIsModalOpen(true)} style={{margin:'20px', padding:'10px'}}>Add New Habit</button>
      <HabitList habits={habits} setHabits={setHabits}/>
      <AddHabitModal isOpen={isModalOpen} onClose={closeModal} onAddHabit={addHabit} />
    </div>
  )
}

export default App

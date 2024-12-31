import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const AddHabitModal = ({isOpen, onClose, onAddHabit}) => {
    const[habitName, setHabitName] = useState('')

    const handleAddHabit = () => {
        if (habitName.trim()) {
            onAddHabit(habitName);
            setHabitName('');
            onClose()
        }
    }
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
        <h2>Add New Habit</h2>
        <input type="text" 
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder='Habit Name'
        style={styles.input}/>
        <button onClick={handleAddHabit} style={styles.button}>Add Habit</button>
        <button onClick={onClose} style={{...styles.button, backgroundColor:'red'}}>Cancel</button>
    </Modal>
  )
}

const modalStyles = {
    content: {
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translate(-50%, -50%)',
        padding:'20px',
        width:'300px',
        textAlign:'center'
    }
}

const styles = {
    input:{width:'100%',padding:'10px',marginBottom:'10px'},
    button:{padding:'10px',marginRight:'10px',cursor:'pointer'}
}

export default AddHabitModal

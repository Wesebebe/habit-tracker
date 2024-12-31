import React from 'react'

const HabitList = ({habits, setHabits}) => {
    // const[habits,setHabits] = useState([
    //     {id:1,name:'Exercise',completed:false},
    //     {id:2,name:'Read',completed:true}
    // ])

    const toggleCompletion = (id) => {
        setHabits((prevHabits) => 
        prevHabits.map((habit) => 
        habit.id===id? {...habit,completed:!habit.completed} : habit))
    }
  return (
    <div style={styles.container}>
      <h2>Your Habits</h2>
      <ul style={styles.list}>
        {habits.map((habit)=>(
            <li key={habit.id} style={styles.listItem}>
                <span style={{textDecoration:habit.completed? 'line-through' : 'none'}}>{habit.name}</span>
                <button onClick={()=>toggleCompletion(habit.id)} style={styles.button}>
                    {habit.completed?'Undo':'Complete'}
                </button>
            </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
    container:{padding:'20px'},
    list:{listStyleType:'none',padding:0},
    listItem:{
        display:'flex',
        justifyContent:'space-between',
        padding:'10px',
        border:'1px solid #ddd',
        marginBottom:'10px'
    },
    button:{backgroundColor:'#4CAF50',color:'white',border:'none',padding:'5px 10px'}
}

export default HabitList

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
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>Your Habits</h2>
      <ul className='space-y-3'>
        {habits.map((habit)=>(
            <li key={habit.id} className={`flex justify-between items-center p-4 border rounded-lg ${habit.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                <span className={`${habit.completed? 'line-through text-gray-500' : 'text-gray-900'}`}>{habit.name}</span>
                <button onClick={()=>toggleCompletion(habit.id)} className='bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600'>
                    {habit.completed?'Undo':'Complete'}
                </button>
            </li>
        ))}
      </ul>
    </div>
  )
}

// const styles = {
//     container:{padding:'20px'},
//     list:{listStyleType:'none',padding:0},
//     listItem:{
//         display:'flex',
//         justifyContent:'space-between',
//         padding:'10px',
//         border:'1px solid #ddd',
//         marginBottom:'10px'
//     },
//     button:{backgroundColor:'#4CAF50',color:'white',border:'none',padding:'5px 10px'}
// }

export default HabitList

import React from 'react'

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Habit Tracker</h1>
    </header>
  )
}

const styles = {
    header:{
        backgroundColor:'#4CAF50',
        color:'white',
        padding:'10px 20px',
        textAlign:'center'
    }
}

export default Header

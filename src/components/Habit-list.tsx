import { Box ,Paper } from '@mui/material'
import React from 'react'
import useHabitstore from '../store/store'

const HabitList = () => {
       const {habits} = useHabitstore()
  return (
<Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
     {habits.map((habit)=>(
        <Paper key= {habit.id}>hello</Paper>
     ))}

  </Box>
  )
}

export default HabitList

import { Box, TextField ,FormControl, InputLabel, MenuItem, Select, Button} from '@mui/material'
import React, { useState } from 'react'
import useHabitstore from '../store/store'

const AddHabitForm = () => {
    const [name,setName] = useState("")
    const [frequency,setFrequency] = useState<"daily" | "weekly"> ("daily")

      const {addHabit,habits} = useHabitstore();
    console.log(habits)

      const handleSubmit =(e: React.FormEvent) =>{
        e.preventDefault();
        if(name.trim()) {
          addHabit(name, frequency);
          setName("");
        }
      }

  return (
  <form onSubmit={handleSubmit} >
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap:2,
    }}>
        <TextField label = 
        "Habit Name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder='Enter Your name'
        fullWidth
         />
         <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    value={frequency}
    label ="Frequency"
   onChange={(e) => setFrequency(e.target.value as "daily" |"weekly")}
  >
    <MenuItem value="daily">Daily </MenuItem>
    <MenuItem value="weekly">Weekly </MenuItem>
  </Select>
</FormControl>
   <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
    </Box>
  </form>
)
}

export default AddHabitForm
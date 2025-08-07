
import { Container, Typography ,Box } from '@mui/material'
import './App.css'
import AddHabitForm from './components/Add-habit-from'
import HabitList from './components/Habit-list'
// import useHabitstore from './store/store'

function App() {
 
 // const store = useHabitstore()
 // console.log(store)

  return (
    <Container>
<Box>
  <Typography variant='h2' component="h1" gutterBottom align='center' >
    Habit tracker
  </Typography>
  {/* form  */}
  {/* list  */}
 
  {/* stats  */}
  <AddHabitForm />
    <HabitList />

</Box>


    </Container>
  )
}

export default App

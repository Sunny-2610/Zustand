import React, { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import AddHabitForm from "./components/Add-habit-from";
import HabitList from "./components/Habit-list";
import HabitStats from "./components/Habit-stats";
import useHabitStore from "./store/store";

const App: React.FC = () => {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
        <HabitStats />
      </Box>
    </Container>
  );
};

export default App;
import { create } from "zustand";


export interface habit {
    id: string;
    name: string;
    frequency: "Daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}
 
interface HabitState {
    habits: habit[];
    addHabit : (name: string, frequency: "daily" | "weekly") => void;
}




const useHabitstore = create<HabitState>()((set)=>{

    return {
        habits:[],
        addHabit:(name,frequency)=>set((state)=>{
         return{
            habits:[
           ...state.habits,
           {
            id: Date.now().toString(),
            name,
            frequency,
            completedDates: [],
            createdAt: new Date().toDateString(),
           }
        ]
         }
        })
    }

})

export default useHabitstore;
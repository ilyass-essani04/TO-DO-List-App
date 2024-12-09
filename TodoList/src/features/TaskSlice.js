import { createSlice } from "@reduxjs/toolkit";




export const TaskSlice = createSlice({
    name : "ToDo",
    initialState : [],
    reducers :{
        AddTask:(state, action) =>{
            const task = action.payload
            state.push({task, id: Date.now() })
            // console.log(state)
        },
        RemoveTask:(state, action) =>{
            return state.filter((task) => task.id !== action.payload )
        }
    }
    
})

export const { AddTask, RemoveTask } = TaskSlice.actions;
export default TaskSlice.reducer;
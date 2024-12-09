import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../features/TaskSlice";


const store = configureStore({
    reducer : {
        ToDo : TaskSlice,
    },
});

export default store; 
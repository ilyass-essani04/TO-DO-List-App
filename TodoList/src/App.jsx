import React from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";



function App(){
    

    return(
    <>
        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
            <div class="px-4 py-2">
                <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
            </div>
            <TodoForm />
            <TodoList />
        </div>
    </>
    );
}
export default App;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTask } from "../features/TaskSlice";



const TodoList = () => {

    const ToDo = useSelector((state) => state.ToDo);
    const dispatch = useDispatch();

    return(
        <ul class="divide-y divide-gray-200 px-4">
            {ToDo.map((task) => (
                <li key={task.id} class="py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="todo1" name="todo1" type="checkbox"
                            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                        <label for="todo1" class="ml-3 block text-gray-900">
                            <span class="text-lg font-medium">{task.task}</span>
                        </label>
                    </div>
                    <button
                        onClick={()=>{dispatch(RemoveTask(task.id))}} class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                        Delete
                    </button>
                </div>
            </li>
            ))}
        </ul>
    )
}

export default TodoList;
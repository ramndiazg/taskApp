'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@/hooks/useLocalstorage';//////xxx
//const { v4: uuidv4 } = require('uuid');
export const TaskContext = createContext();




export const Taskprovider = ({children}) => {
    const [tasks, setTasks] = useLocalStorage("tasks", []);////////xxx
    //const [tasks, setTasks] = useState([]);

    //useEffect(() => {
    //    const item = localStorage.getItem('tasks')
    //    const tasks = JSON.parse(item)
    //    if(tasks.length > 0) {
    //        setTasks(tasks);
    //    }
    //}, [])

    //useEffect(() => {
    //    localStorage.setItem('tasks', JSON.stringify(tasks));
    //}, [tasks])
    
    const createTask = (title, description) => {
        setTasks([...tasks, {
            title,
            description,
            id: uuidv4()
        }])
    };

    const deleteTask = (id) => {
        setTasks([...tasks.filter(task => task.id !== id)])
       
    }

    const updateTask = (id, newFields) => {
        setTasks([...tasks.map(task => task.id === id ? {...task, ...newFields} : task)])
    }

    return<TaskContext.Provider value={
        {
            tasks: tasks, 
            createTask: createTask,
            deleteTask: deleteTask,
            updateTask: updateTask
        }
    }>{children}</TaskContext.Provider>
}


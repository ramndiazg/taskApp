"use client";
import { useTasks } from '@/context/TasksContext'
import React from 'react'

function page() {

    const {tasks} = useTasks()
    
  return (
    <div>
        <h3>about page</h3>
    </div>
  )
}

export default page
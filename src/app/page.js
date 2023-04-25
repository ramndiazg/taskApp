"use client";
import { useTasks } from '@/context/TasksContext'
import { TaskCard } from '@/components/TaskCard';
import React from 'react'


function page() {
  const {tasks} = useTasks()
  //console.log(tasks)
  return (
    <div className='justify-center'>
        <div className='w-7/10 grid grid-cols-2 text-cyan-600'>
            {tasks.map((task, i) =>(
                <div>
                    <TaskCard task={task} key={i}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page
"use client";
import { useTasks } from '@/context/TasksContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from "react-hot-toast";


function page({params}) {
  
  //const [task, setTask] = useState({title:"", description:""});
  const {tasks, createTask, updateTask} = useTasks();
  const router = useRouter();
  const {register, handleSubmit, setValue, formState:{errors}} = useForm();

  //console.log(params)

  //const handleChange = (e) => {
    //console.log(e.target.name, e.target.value)
  //  setTask({...task, [e.target.name]: e.target.value})
  //};
  //const handelSubmit = (e) => {
  //  e.preventDefault()
    //if(params.id){
    //  updateTask(params.id, task)
    //}else{
    //createTask(task.title, task.description);
    //}
    //router.push('/')
  //};

  const onSubmit = handleSubmit((data) => {
    if (!params.id) {
      createTask(data.title, data.description);
      toast.success("Task created successfully");
    } else {
      updateTask(params.id, data);
      toast.success("Task updated successfully");
    }
    router.push("/");
  });

  useEffect(()=>{
    if(params.id){
      //alert(params.id)
      //alert(task)
      const taskFound = tasks.find((task) => task.id === params.id);
      if(taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
        //setTask({
        //  title:taskFound.title, 
        //  description:taskFound.description
        //});
      }
      
    }
  }, [])
  
  return (
    //<form onSubmit={handelSubmit}>
    <div className='flex justify-center items-center h-full '>
    <form onSubmit={onSubmit}
          className='bg-blue-300 cursor-poiter px-20 py-10 m-5 flex-grow justify-center rounded-md p-10 text-bold'
          >
      <h3 className='text-bold text-blue-900'>New Task</h3>
      <div>
      <input 
      //name='title' 
      placeholder='write a title' 
      //onChange={handleChange}
      //value={task.title}
      {...register("title", {required: true})}
      className='bg-blue-600 hover:bg-blue-500 py-3 px-4 mb-2 block focus:outline-none w-full text-bold text-blue-900'
      />
      {errors.title && (<span className='block text-red-500 mb-2'>this field is required</span>)}

      <textarea 
      //name='description' 
      placeholder='write a description' 
      //onChange={handleChange}
      //value={task.description}
      {...register("description", {required: true})}
      className='bg-blue-600 hover:bg-blue-500 py-3 px-4 mb-2 block focus:outline-none w-full text-blue-900'
      />
      {errors.description && (<span className='block text-red-500 mb-2'>this field is required</span>)}
      </div>
      <button
          className=" bg-blue-600 hover:bg-blue-400 px-5 py-2 font-bold rounded-full inline-flex items-stretch text-bold disabled:opacity-60"
          
      >save</button>
    </form>
    </div>
  )
}

export default page
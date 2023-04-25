
'use client';

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTasks } from '@/context/TasksContext';

export function NavBar() {
    const router = useRouter()
    const {tasks} = useTasks()

    return (
        <header className='flex justify-between items-center bg-green-600 px-28 py-3 text-cyan-600' >
            <Link href='/'>
                <h1 className='font-bold text-2xl text-blue-900'>
                    TaskApp
                    <span className='text-green-300 text-sm ml-7' >{tasks.length} tasks</span>
                </h1>
            </Link>
            <div>
                <button
                    onClick={( ) => {router.push('/new')}}
                    className='bg-blue-600 hover:bg-blue-400 px-5 py-2 font-bold rounded-full inline-flex items-stretch text-blue-900'
                >Add Task</button>
            </div>
        </header>
    )
  
}


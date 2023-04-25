import { useRouter } from "next/navigation"
import { useTasks } from "@/context/TasksContext"
import { toast } from "react-hot-toast";

export const TaskCard = ({ task }) => {
    const router = useRouter()
    const {deleteTask} = useTasks()
    return (
        <div className="bg-blue-300 hover:bg-blue-500 cursor-poiter px-20 py-10 m-5 flex-grow justify-center rounded-md  text-bold"
            onClick={()=>router.push(`/edit/${task.id}`)}
        >
                <h2 className="font-bold text-blue-900">{task.title}</h2>
                <h4 className="font-italic text-blue-700">{task.description}</h4>
                    <button onClick={(e)=>{
                                        e.stopPropagation()
                                        const confirm = window.confirm('Are you sure you want to delete')
                                        if (confirm){
                                            deleteTask(task.id)
                                            toast.success('task deleted successfully')
                                        }
                                        
                                        }}
                                        className=" bg-blue-600 hover:bg-blue-400 px-5 py-2 font-bold rounded-full inline-flex items-stretch text-blue-900"
                                        >
                        Delete
                    </button>
                
        </div>
    )
}
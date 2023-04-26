import { TaskContext } from "@/context/TasksContext";
import { useContext } from "react";

export const UseTasks = () => {
    const context = useContext(TaskContext)
    if (!context) throw new Error('useTask must used within a provider')
    return context;
}
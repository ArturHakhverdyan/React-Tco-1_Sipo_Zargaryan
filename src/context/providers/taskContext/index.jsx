import { useState } from "react"
import { TaskContext } from "../.."

export const TaskContextProvider = ({children} ) => {
    const [tasks, setTasks] = useState([])
    return(
        <TaskContext.Provider 
        value={{
            tasks,
            setTasks
        }}>

{children}
        </TaskContext.Provider>
    )
}
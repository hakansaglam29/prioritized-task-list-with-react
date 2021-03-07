import React, { useState, createContext, useEffect } from 'react';

export const TaskContext = createContext()

export const TaskProvider = (props) => {

    const [tasks, setTasks] = useState([])
    const [lastId, setLastId] = useState(10000)

    useEffect(() => {
        getLocalInfo()
    }, [])

    useEffect(() => {
        saveLocalInfo()
    }, [tasks])

    const saveLocalInfo = () => {

        localStorage.setItem("tasks", JSON.stringify(tasks))
        localStorage.setItem("lastId", JSON.stringify(lastId))

        // console.log("stateData (in saveLocalTodos) ", this.state.data)
        // console.log("todoLocal (in saveLocalTodos) ", JSON.parse(localStorage.getItem("todos")))
    }

    const getLocalInfo = () => {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks", JSON.stringify([]))
            localStorage.setItem("lastId", JSON.stringify(10000))

        } else {
            let tasksLocal = JSON.parse(localStorage.getItem("tasks"))
            let lastIdLocal = JSON.parse(localStorage.getItem("lastId"))
            // console.log("in getLocalTodos todoLocal", todoLocal)
            setTasks(tasksLocal)
            setLastId(lastIdLocal)
        }

        // if (localStorage.getItem("lastId") === null) {
        //     localStorage.setItem("lastId", JSON.stringify())
        // } else {
        //     let lastIdLocal = JSON.parse(localStorage.getItem("lastId"))
        //     // console.log("in getLocalTodos todoLocal", todoLocal)
        //     setTasks(lastIdLocal)
        // }


    }




    return (
        <TaskContext.Provider value={{ value1: [tasks, setTasks], value2: [lastId, setLastId] }}>
            {props.children}
        </TaskContext.Provider>
    )

}


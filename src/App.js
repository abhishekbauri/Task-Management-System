import React, { useState, useEffect } from "react";
import Filter from "./component/Filter";

import Header from "./component/Header";
import NewTask from "./component/NewTask";
import Search from "./component/Search";
import Task from "./component/Task";

// const DUMMY_TASKS = [
//   {
//     id: 1,
//     title: "react",
//     description:
//       "Lorem Ipsum is simply dummy text ",
//     status: "todo",
//   },

// ];

function App() {
  let getTasks = JSON.parse(localStorage.getItem("tasks"));
  if (getTasks === null) {
    getTasks = [];
  }

  const [taskList, setTaskList] = useState(getTasks);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredTask, setFilteredTask] = useState([]);

  const addTaskHandler = (tasks) => {
    setTaskList((prevTasks) => {
      return [tasks, ...prevTasks];
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const deleteTaskHandler = (taskid) => {
    // console.log(taskid);
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    // console.log(tasks);
    tasks = tasks.filter((item) => item.id !== taskid);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (tasks.length === 0) {
      localStorage.removeItem("tasks");
    }
    setTaskList(tasks);
  };

  const completeTaskHandler = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter((item) => item.status === "completed");
    //console.log(tasks);
    setIsFiltered(true);
    setFilteredTask(tasks);
  };

  const progressTaskHandler = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter((item) => item.status === "progress");
    setIsFiltered(true);
    setFilteredTask(tasks);
  };

  const todoTaskHandler = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter((item) => item.status === "todo");
    setIsFiltered(true);
    setFilteredTask(tasks);
  };

  const showAllTaskHandler = () => {
    setIsFiltered(false);
  };

  const markCompleteTaskHandler = (taskId) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let markComplete = tasks.find((item) => item.id === taskId);
    markComplete.status = "completed";
    setTaskList(tasks);
  };

  const searchTaskHandler = (searchedTask) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let taskSearched = tasks.filter((task) => {
      return (
        task.title === searchedTask || task.description.includes(searchedTask)
      );
    });
    if (taskSearched.length === 0) {
      return alert("not found");
    }
    setIsFiltered(true);
    setFilteredTask(taskSearched);
  };

  return (
    <React.Fragment>
      <Header />
      <NewTask onAddTask={addTaskHandler} />
      <Filter
        onCompleted={completeTaskHandler}
        onProgress={progressTaskHandler}
        onTodo={todoTaskHandler}
        onShowAll={showAllTaskHandler}
      />

      <Search onSearch={searchTaskHandler} />

      {getTasks !== null && !isFiltered && (
        <Task
          task={taskList}
          onDelete={deleteTaskHandler}
          onMarkComplete={markCompleteTaskHandler}
        />
      )}

      {getTasks !== null && isFiltered && (
        <Task
          task={filteredTask}
          onDelete={deleteTaskHandler}
          onMarkComplete={markCompleteTaskHandler}
        />
      )}
    </React.Fragment>
  );
}

export default App;

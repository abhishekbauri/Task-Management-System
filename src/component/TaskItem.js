import React from "react";

import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  // const deleteTask = () => {
  //   let items = JSON.parse(localStorage.getItem("tasks"));
  //   //console.log(items);
  //   items = items.filter((item) => item.id !== props.taskId)
  //   localStorage.setItem("tasks", JSON.stringify(items))
  //   if(items.length === 0){
  //     localStorage.removeItem('tasks')
  //   }
  // };
  //console.log(props.taskId)
  
  const deleteTask =() =>{
    const id = props.taskId;
    props.taskDelete(id);
  }

  const markCompleteTask = () => {
    const id = props.taskId;
    props.markTaskComplete(id);
  }

  const statusStyle = props.status;
  

  return (
    <li className={classes.taskItem}>
      <div className={classes.taskTitle}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.taskDescription}>
        <p>{props.description} </p>
        <br />
        <h4>status: <span className={classes[`${statusStyle}`]}>{props.status}</span>  </h4>
      </div>
      <div >
        {props.status !== "completed" && <button onClick={markCompleteTask} className={classes.markComplete}> Mark Completed </button>}
        
        <button onClick={deleteTask} className={classes.markDelete} > Delete </button>
      </div>
    </li>
  );
};

export default TaskItem;

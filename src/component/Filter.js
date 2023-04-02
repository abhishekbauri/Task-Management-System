import React from "react";

import classes from "./Filter.module.css";

const Filter = (props) => {
  const completedTask = () => {
    props.onCompleted();
  }

  const progressTask = () => {
    props.onProgress();
  }

  const todoTask=() =>{
    props.onTodo();
  }

  const showAll = () => {
    props.onShowAll();
  }

  return (
    <div className={classes.filter}>
      <button className={classes.completed} onClick={completedTask}>completed</button>
      <button className={classes.progress} onClick={progressTask}>progress</button>
      <button className={classes.todo} onClick={todoTask}>todo</button>
      <button className={classes.showall} onClick={showAll}> show all</button>
    </div>
  );
};

export default Filter;

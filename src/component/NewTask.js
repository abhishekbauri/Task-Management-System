import React from "react";
import InputForm from "./InputForm";

const NewTask = (props) => {
  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    props.onAddTask(taskData);
    //localStorage.setItem("tasks", JSON.stringify(taskData));
  };

  return <InputForm onSaveTaskData={saveTaskDataHandler} />;
};

export default NewTask;

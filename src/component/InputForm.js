import React, { useState } from "react";

import classes from "./InputForm.module.css";

const InputForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if(enteredTitle === ""){
      return alert("please fill the title")
    }
    if(enteredDescription===""){
      return alert("please fill the description")
    }
    if(enteredStatus===''){
      return alert("please fill the status")
    }

    const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      status: enteredStatus,
    }
    //console.log(taskData)

    props.onSaveTaskData(taskData);

    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredStatus("");
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["form-control"]}>
        <label htmlFor="name">Title</label>
        <input 
          type="text" 
          placeholder="type in lowercase "
          value={enteredTitle}
          onChange={titleChangeHandler} 
        />
        <br />
        <label htmlFor="name">Description</label>
        <textarea 
          type="text" 
          placeholder="write the description over here......"
          value={enteredDescription}
          onChange={descriptionChangeHandler} 
        />
        <br />
        <label htmlFor="name">Status</label>
        <input
         type="text" 
         placeholder="todo/completed/progress"
         value={enteredStatus}
         onChange={statusChangeHandler} 
        />
        <br />
      </div>
      <div className={classes["form-actions"]}>
        <button type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default InputForm;

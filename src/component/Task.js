import React from "react";
import TaskItem from "./TaskItem";

const Task = (props) => {
  return (
    <ul>
      {props.task.map((tasked) => {
        return (
          <TaskItem
            key={tasked.id}
            title={tasked.title}
            description={tasked.description}
            status={tasked.status}
            taskId={tasked.id}
            taskDelete={props.onDelete}
            markTaskComplete={props.onMarkComplete}
          />
        );
      })}
    </ul>
  );
};

export default Task;

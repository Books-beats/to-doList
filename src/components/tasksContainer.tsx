"use client";
import { useState } from "react";
import AddTask from "./addTask";
import TaskRow from "./taskRow";

export default function TasksContainer() {
  const dafaultTasksArray = [
    {
      id: "1",
      title: "Sample 1",
      description: "Xyzzzxdcfc",
      status: "Incomplete",
    },
    {
      id: "2",
      title: "Sample 2",
      description: "vgegeqg",
      status: "Incomplete",
    },
    {
      id: "3",
      title: "Sample 3",
      description: "gregavgqfgt",
      status: "Incomplete",
    },
    { id: "4", title: "Sample 4", description: "vrws", status: "Incomplete" },
    { id: "5", title: "Sample 5", description: "grsgv", status: "Incomplete" },
  ];
  const [taskArray, setTaskArray] = useState(dafaultTasksArray);
  const updateTasksArray = (task) => {
    setTaskArray((taskArray) => [...taskArray, task]);
  };

  return (
    <>
      <div className="border border-solid border-indigo-600">
        <h1>Task Container</h1>
        {taskArray.map((task) => (
          <TaskRow key={task.id} task={task} id={"1234"} />
        ))}
        <AddTask addTask={updateTasksArray} />
      </div>
    </>
  );
}

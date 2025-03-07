import React from "react";
import TasksContainer from "../components/tasksContainer";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <TasksContainer />
    </>
  );
}

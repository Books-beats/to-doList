"use client";

export default function TaskRow({ task, id }) {
  const markComplete = () => {
    console.log("task completed");
  };
  return (
    <>
      <div>
        {" "}
        <button onClick={markComplete}>+</button>
        {task.title}
      </div>
    </>
  );
}

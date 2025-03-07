"use client";
import { useState } from "react";

export default function AddTask() {
  const [open, setOpen] = useState(false);
  const handleNewTask = () => {
    setOpen(!open);
  };
  return (
    <>
      <button className="bg-red-500" onClick={handleNewTask}>
        Add New Task
      </button>
      {open && (
        <div>
          <input name="title" />
        </div>
      )}
    </>
  );
}

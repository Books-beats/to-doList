"use client";
import { useState } from "react";

export default function AddTask({ addTask }) {
  const [open, setOpen] = useState(false);
  const handleNewTask = () => {
    setOpen(!open);
  };

  const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };

  const handleSubmit = (e) => {
    // prevents page reload on form submission
    e.preventDefault();

    const form = e.target;
    console.log("form", form);
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log("formdata", formJson);

    const task = {
      title: formJson.title,
      description: formJson.description,
      id: generateRandomNumber,
    };
    addTask(task);
    form.reset();
  };
  return (
    <>
      <button className="bg-red-500" onClick={handleNewTask}>
        Add New Task
      </button>
      {open && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <b>Title</b>
              <input name="title" placeholder="Enter the task title" />
            </label>
            <label>
              <b>Description</b>
              <input
                name="description"
                placeholder="Enter the task description"
              />
            </label>
            <hr />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

"use client";

import { addTask, getTasks } from "@/api/api";
import { TaskType } from "@/api/type";
import React, { ChangeEvent, FormEvent, useState } from "react";

const AddTask = () => {
  // taskのtitle
  const [text, setText] = useState("");

  // submitボタン
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newTask: TaskType = {
      id: Math.floor(Math.random() * 10e3),
      text: text,
    };
    await addTask(newTask);
    setText("");
  };

  return (
    <form className="mb-8 space-y-3" onSubmit={handleSubmit}>
      <input
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        value={text}
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded transform duration-300 hover:bg-blue-400 hover:scale-95"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;

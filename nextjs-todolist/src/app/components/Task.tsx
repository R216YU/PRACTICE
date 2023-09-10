"use client";

import { deleteTask, editTask } from "@/api/api";
import { TaskType } from "@/api/type";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

interface TaskProps {
  task: TaskType;
}

const Task = ({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  // editボタン
  const handleEdit = () => {
    setIsEditing(true);
  };
  // saveボタン
  const handleSave = async () => {
    await editTask(task.id, editedText);
    setIsEditing(false);
  };
  // deleteボタン
  const handleDelete = async () => {
    await deleteTask(task.id);
  };

  return (
    <li
      key={task.id}
      className="flex flex-row justify-between items-center p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEditing ? (
        <input
          ref={ref}
          className="mr-2 py-2 px-2 rounded border-gray-400 border"
          value={editedText}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="space-x-3">
        {isEditing ? (
          <button className="text-indigo-500" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="text-green-500" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button className="text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;

import { TaskType } from "./type";

// 全てのtaskを取得
export const getTasks = async (): Promise<TaskType[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store" });
  const tasks = res.json();

  return tasks;
};

// taskを追加
export const addTask = async (task: TaskType): Promise<TaskType> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = res.json();

  return newTask;
};

// taskを編集
export const editTask = async (id: number, newText: string): Promise<TaskType> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTask = res.json();

  return updatedTask;
};

// taskを削除
export const deleteTask = async (id: number): Promise<TaskType> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deletedTask = res.json();

  return deletedTask;
};

import React from "react";
import { useRecoilState } from "recoil";
import { todoAtoms } from "../atom/todoAtoms";

const Todo = ({ id, title, isComplete }) => {
  const [todos, setTodos] = useRecoilState(todoAtoms);

  // 削除
  const deleteHandler = (id) => {
    const newTodos = todos.filter((todos) => todos.id !== id);
    setTodos(newTodos);
  };
  // 完了・未完了の切り替え
  const toggleCompleteHandler = () => {
    const newTodo = { id: id, title: title, isComplete: !isComplete };
    setTodos([...todos.slice(0, id - 1), newTodo, ...todos.slice(id)]);
  };
  return (
    <div
      className={`w-1/4 flex flex-col items-center gap-2 p-10 border-l-4 rounded-md" ${
        isComplete ? "border-indigo-400" : "border-green-400"
      }`}
    >
      <span>ID:{id}</span>
      <p>{title}</p>
      <div className="flex flex-row gap-2">
        <button onClick={toggleCompleteHandler} className="border rounded hover:bg-green-400 duration-200 p-1">
          {isComplete ? "未完了" : "完了"}
        </button>
        <button onClick={() => deleteHandler(id)} className="border rounded hover:bg-red-400 duration-200 p-1">
          削除
        </button>
      </div>
    </div>
  );
};

export default Todo;

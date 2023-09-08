import React, { useState } from "react";
import { todoAtoms } from "../atom/todoAtoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { todoSelector } from "../atom/todoSelector";

const Form = () => {
  const [todos, setTodos] = useRecoilState(todoAtoms);
  const { totalNum } = useRecoilValue(todoSelector);
  const [title, setTitle] = useState("");

// 追加
  const addHandler = (e) => {
    e.preventDefault();
    const newTodos = {
      id: totalNum + 1,
      title: title,
      isCompleted: false,
    };
    setTodos([...todos, newTodos]);
    setTitle("");
  };

  return (
    <div className="flex flex-row justify-center mb-10">
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 rounded-md py-2 px-6 text-center"
        />
        <button type="submit" onClick={addHandler} className="rounded-md border-2 px-4 py-2">
          +
        </button>
      </form>
    </div>
  );
};

export default Form;

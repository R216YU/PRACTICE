import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoAtoms } from "../atom/todoAtoms";
import Form from "./Form";
import Stats from "./Stats";
import Todo from "./Todo";

const Todolist = () => {
  const [todos] = useRecoilState(todoAtoms);

  return (
    <div>
      <Stats />
      <Form />

      <div className="flex flex-col gap-2 items-center">
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} isComplete={todo.isComplete} />
        ))}
      </div>
    </div>
  );
};

export default Todolist;

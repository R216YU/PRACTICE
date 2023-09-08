import { selector } from "recoil";
import { todoAtoms } from "./todoAtoms";

export const todoSelector = selector({
  key: "TodoStats",
  get: ({ get }) => {
    const todoList = get(todoAtoms);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((todo) => todo.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentage = totalNum === 0 ? 0 : Math.floor((totalCompletedNum / totalNum) * 100);

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentage,
    };
  },
});

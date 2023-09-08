import React from "react";
import { useRecoilValue } from "recoil";
import { todoSelector } from "../atom/todoSelector";

const Stats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentage } = useRecoilValue(todoSelector);

  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-2xl mb-2">Todo Stats</h2>
      <div className="flex gap-10">
        <p>Todoの数:{totalNum}</p>
        <p className="text-indigo-400">完了済み:{totalCompletedNum}</p>
        <p className="text-green-400">取組中:{totalUncompletedNum}</p>
        <p>完了割合:{percentage}%</p>
      </div>
    </div>
  );
};

export default Stats;

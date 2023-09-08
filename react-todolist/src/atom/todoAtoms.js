import { atom } from "recoil";

export const todoAtoms = atom({
  key: "Todo",
  default: [
    {
      id: 1,
      title: "default todo 1",
      isComplete: false,
    },
    {
      id: 2,
      title: "default todo 2",
      isComplete: false,
    },
  ],
});

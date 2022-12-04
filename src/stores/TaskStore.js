import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  //function that returns an object
  //different data require a  different store (comments,dates,auth state)
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "grocery shopping", isFav: true },
    ],
    name: "Yoshi",
  }),
});

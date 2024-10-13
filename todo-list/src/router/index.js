import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../components/tasksList.vue";
import AddTask from "../components/addTask.vue";

const routes = [
  { path: "/", component: TaskList, name: "Home" },
  { path: "/add-task", component: AddTask, name: "AddTask" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

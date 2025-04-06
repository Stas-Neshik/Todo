export type Complete = "newTask" | "inProgress" | "Done";

export type Task = {
  id: string;
  title: string;
  text: string;
  completed: string;
  date: string;
  priority: "low" | "medium" | "high";
};

export type TodoState = {
  tasks: Task[];
  filter: string;
  sort: string;
};

export type Todos = Task[];

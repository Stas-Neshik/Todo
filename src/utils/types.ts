export type Task = {
  id: string;
  title: string;
  text: string;
  completed: boolean;
  date: string;
};

export type TodoState = {
  tasks: Task[];
  filter: string;
  sort: string;
};

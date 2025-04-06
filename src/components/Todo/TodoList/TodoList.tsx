import { useMemo } from "react";
import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";
import { Todos } from "../../../utils/types";
import { RootState } from "../../../store/store";
import SortDropdown from "../../UI/SortDropdown/SortDropdown";

function sortTasks(tasks: Todos, sortType: string) {
  if (sortType === "status") {
    return [...tasks].sort((a, b) => a.completed.localeCompare(b.completed));
  } else if (sortType === "date") {
    return [...tasks].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } else if (sortType === "id") {
    return [...tasks].sort((a, b) => Number(a.id) - Number(b.id));
  } else {
    return tasks;
  }
}

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.tasks);
  const sort = useSelector((state: RootState) => state.todos.sort);
  const filter = useSelector((state: RootState) => state.todos.filter);

  const filteredTasks = useMemo(() => {
    if (filter === "all") return todos;
    return todos.filter((task) => task.priority === filter);
  }, [todos, filter]);

  const sortedTasks = useMemo(
    () => sortTasks(filteredTasks, sort),
    [filteredTasks, sort],
  );

  return (
    <div>
      <SortDropdown />
      <ul>
        {sortedTasks.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

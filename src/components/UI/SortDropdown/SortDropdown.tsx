import { useDispatch, useSelector } from "react-redux";
import styles from "./SortDropdown.module.css";
import { RootState } from "../../../store/store";
import { setSort } from "../../../store/todoSlice";

const SortDropdown = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.todos.sort);

  return (
    <div className={styles.sortContainer}>
      <select
        onChange={(e) => dispatch(setSort(e.target.value))}
        value={sort}
        className={styles.sortSelect}
      >
        <option value="none">Сортировать по...</option>
        <option value="status">По статусу</option>
        <option value="date">По времени</option>
        <option value="id">По ID</option>
      </select>
    </div>
  );
};

export default SortDropdown;

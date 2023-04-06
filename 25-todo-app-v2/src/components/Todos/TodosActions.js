import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosAction.module.css';

function TodosAction({
  resetTodos,
  deleteCompletedTodos,
  completedTodoExists,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodoExists}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;

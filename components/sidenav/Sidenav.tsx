import TaskHeader from '../task/task-header/TaskHeader';
import TaskList from '../task/task-list/TaskList';
import styles from './Sidenav.module.scss';

export default function Sidenav() {
  return (
    <div className={styles.container}>
      <TaskHeader></TaskHeader>
      <TaskList></TaskList>
    </div>
  );
}

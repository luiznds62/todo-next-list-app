import Navbar from '../navbar/Navbar';
import TaskCalendar from '../task/task-calendar/TaskCalendar';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <TaskCalendar></TaskCalendar>
    </div>
  );
}

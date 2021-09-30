import Task from '../../../model/Task';
import TaskListItem from '../task-list-item/TaskListItem';
import styles from './TaskList.module.scss';

export default function TaskList({ tasks }: any) {
  const taskList = JSON.parse(tasks);

  return (
    <div className={styles.container}>
      <h5 className="mt-24 mb-16">Today</h5>
      {taskList.map((task: Task, idx: any) => {
        return <TaskListItem task={task} key={idx} />;
      })}
    </div>
  );
}

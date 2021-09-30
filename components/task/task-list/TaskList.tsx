import Task from '../../../model/Task';
import TaskListItem from '../task-list-item/TaskListItem';
import styles from './TaskList.module.scss';

export default function TaskList({ tasks }: any) {
  const taskList = JSON.parse(tasks);

  return (
    <div className={styles.container}>
      <h5 className="mt-24 mb-16">Today</h5>
      {taskList.map((task: Task, idx: any) => {
        return <TaskListItem description={task.description} from={task.from} to={task.to} key={idx} />;
      })}
    </div>
  );
}

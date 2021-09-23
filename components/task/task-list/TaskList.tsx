import TaskListItem from '../task-list-item/TaskListItem';
import styles from './TaskList.module.scss';

export default function TaskList() {
  const items = [
    { description: 'Walk the dogs', from: '9am', to: '10:30am' },
    { description: 'Look at events for Here', from: '11am', to: '12 am' },
    { description: 'Daily ideas demo for devs', from: '2pm', to: '4pm' }
  ];

  return (
    <div className={styles.container}>
      <h5 className="mt-24 mb-16">Today</h5>
      {items.map((item, idx) => {
        return <TaskListItem description={item.description} from={item.from} to={item.to} key={idx} />;
      })}
    </div>
  );
}

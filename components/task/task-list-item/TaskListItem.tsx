import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Task from '../../../model/Task';
import ButtonComponent from '../../ui/button/Button';
import styles from './TaskListItem.module.scss';

export default function TaskListItem(params: any) {
  const [task, setTask] = useState<Task>(params.task);

  function onChangeDone(checked: boolean) {
    setTask({ ...task, done: checked });
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className="mr-8 mb-16">
          <Form.Check type="checkbox" checked={task.done} onChange={(e) => onChangeDone(e.target.checked)} />
        </div>
        <div>
          <div>
            <h6 className={styles.description}>{task.description}</h6>
          </div>
          <div className={styles.sub}>
            <span className="text-muted mr-4">{task.from}</span>
            <i className="bi bi-arrow-right"></i>
            <span className="text-muted ml-4">{task.to}</span>
          </div>
        </div>
        <div className={styles.dotButton}>
          <ButtonComponent size="sm" icon="bi bi-three-dots" variant="round-secondary" />
        </div>
      </div>
    </div>
  );
}

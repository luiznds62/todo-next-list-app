import { Form } from 'react-bootstrap';
import ButtonComponent from '../../ui/button/Button';
import styles from './TaskListItem.module.scss';

export default function TaskListItem({ description, from, to }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className="mr-8 mb-16">
          <Form.Check type="checkbox" />
        </div>
        <div>
          <div>
            <h6 className={styles.description}>{description}</h6>
          </div>
          <div className={styles.sub}>
            <span className="text-muted mr-4">{from}</span>
            <i className="bi bi-arrow-right"></i>
            <span className="text-muted ml-4">{to}</span>
          </div>
        </div>
        <div className={styles.dotButton}>
          <ButtonComponent size="sm" icon="bi bi-three-dots" variant="round-secondary" />
        </div>
      </div>
    </div>
  );
}

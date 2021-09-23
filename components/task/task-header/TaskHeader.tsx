import ButtonComponent from '../../ui/button/Button';
import styles from './TaskHeader.module.scss';

export default function TaskHeader() {
  return (
    <div className={styles.container}>
      <h3>Your tasks</h3>
      <ButtonComponent label="New task" iconRight="bi bi-plus-circle" />
    </div>
  );
}

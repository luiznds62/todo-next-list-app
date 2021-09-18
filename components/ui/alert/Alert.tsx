import styles from './Alert.module.scss';
import { Alert } from 'react-bootstrap';

export default function AlertComponent({ variant, children }: any) {
  return (
    <Alert variant={variant}>
      <i className={`bi bi-check-circle ${styles.icon} bg-${variant}-icon`}></i>
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </Alert>
  );
}

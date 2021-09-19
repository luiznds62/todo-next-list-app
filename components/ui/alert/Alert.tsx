import styles from './Alert.module.scss';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';

export default function AlertComponent({ icon, variant, children }: any) {
  const [show, setShow] = useState(true);

  function close() {
    setShow(false);
  }

  return (
    <Alert show={show} variant={variant}>
      <i className={`${icon} ${styles.icon} bg-${variant}-icon`}></i>
      <div className="row">
        <div className="col">{children}</div>
      </div>
      <i className={`bi bi-arrow-right alert-button`} onClick={() => close()}></i>
    </Alert>
  );
}

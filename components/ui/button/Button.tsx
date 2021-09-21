import styles from './Button.module.scss';
import { Button } from 'react-bootstrap';

export default function ButtonComponent({ variant, label, size, onClick }: any) {
  function click() {
    if (onClick) onClick();
  }

  return (
    <Button variant={variant} onClick={() => click()} size={size}>
      {label}
    </Button>
  );
}

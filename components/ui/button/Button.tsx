import styles from './Button.module.scss';
import { Button } from 'react-bootstrap';

export default function ButtonComponent({ type, variant, onClick }: any) {
  return (
    <Button variant={variant} onClick={() => onClick()}>
      Primary
    </Button>
  );
}

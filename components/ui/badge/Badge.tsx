import styles from './Button.module.scss';
import { Badge, Button } from 'react-bootstrap';

export default function BadgeComponent({ variant, label, pill }: any) {
  return (
    <Badge pill={pill === 'true'} bg={variant}>
      {label}
    </Badge>
  );
}

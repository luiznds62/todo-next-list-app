import styles from './Button.module.scss';
import { Button } from 'react-bootstrap';

export default function ButtonComponent({ variant, label, size, icon, iconLeft, iconRight, disabled, onClick }: any) {
  function click() {
    if (onClick) onClick();
  }

  return (
    <Button variant={variant} onClick={() => click()} size={size} disabled={disabled === 'true'}>
      {iconLeft && <i className={`${iconLeft} icon-left`}></i>}
      {icon && <i className={`${icon} icon-center`}></i>}
      {label}
      {iconRight && <i className={`${iconRight} icon-right`}></i>}
    </Button>
  );
}

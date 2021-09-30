import ButtonComponent from '../ui/button/Button';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ButtonComponent label="Today" />
      </div>
    </div>
  );
}

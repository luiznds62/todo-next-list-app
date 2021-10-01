import ButtonComponent from '../ui/button/Button';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const today = new Date();

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftPart}>
          <ButtonComponent label="Today" variant="outline-secondary" />
          <div className={styles.leftRightIcons}>
            <i className="bi bi-arrow-left-circle"></i>
            <i className="bi bi-arrow-right-circle"></i>
          </div>
        </div>
        <div className={styles.todayDate}>
          <span className="m-text dark-text text-600">Today</span>
          <span className="m-text text-muted text-600">
            {today.getDate()}th {capitalizeFirstLetter(today.toLocaleString('default', { month: 'long' }))}
          </span>
        </div>
        <div>
          <ButtonComponent label="Refresh" variant="outline-secondary" iconRight="bi bi-arrow-clockwise" />
        </div>
      </div>
      <div className={styles.userContainer}>user</div>
    </div>
  );
}

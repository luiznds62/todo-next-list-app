import styles from './TaskCalendar.module.scss';
import AlertComponent from '../ui/alert/Alert';

export default function TaskCalendar() {
  return (
    <>
      <div className="container">
        <h1>Almost before we knew it, we had left the ground.</h1>
        {['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant, idx) => (
          <AlertComponent icon="bi bi-check-circle" key={idx} variant={variant}>
            A short alert message here…
          </AlertComponent>
        ))}
      </div>
    </>
  );
}

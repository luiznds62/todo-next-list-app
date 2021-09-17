import styles from './TaskCalendar.module.scss';

export default function TaskCalendar() {
  return (
    <div className="container">
      <div className="toast" data-autohide="false">
        <div className="toast-header">
          <svg
            className=" rounded mr-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect fill="#007aff" width="100%" height="100%" />
          </svg>
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <p className={`lead ${styles.test}`}>task header</p>
      <h1>Almost before we knew it, we had left the ground.</h1>
      <i className="bi bi-alarm"></i>
      <button onClick={() => showAlert()}>teste</button>
    </div>
  );
}

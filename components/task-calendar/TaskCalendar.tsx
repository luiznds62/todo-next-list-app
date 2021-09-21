import ButtonComponent from '../ui/button/Button';

export default function TaskCalendar() {
  return (
    <>
      <div className="container">
        <h1>Almost before we knew it, we had left the ground.</h1>
        {['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'dark'].map((variant, idx) => (
          <div key={idx} className="row mb-2">
            <div className="col">
              <ButtonComponent key={idx} variant={variant} label="Button"></ButtonComponent>
            </div>
          </div>
        ))}

        {['round-primary', 'round-secondary', 'round-tertiary', 'round-success', 'round-danger', 'round-warning', 'round-dark'].map(
          (variant, idx) => (
            <div key={idx} className="row mb-2">
              <div className="col">
                <ButtonComponent key={idx} variant={variant} label="Button"></ButtonComponent>
              </div>
            </div>
          )
        )}

        {[
          'outline-primary',
          'outline-secondary',
          'outline-tertiary',
          'outline-success',
          'outline-danger',
          'outline-warning',
          'outline-dark'
        ].map((variant, idx) => (
          <div key={idx} className="row mb-2">
            <div className="col">
              <ButtonComponent key={idx} variant={variant} label="Button"></ButtonComponent>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

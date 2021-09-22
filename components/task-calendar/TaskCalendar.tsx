import BadgeComponent from '../ui/badge/Badge';
import ButtonComponent from '../ui/button/Button';

export default function TaskCalendar() {
  return (
    <>
      <div className="container">
        <h1>Almost before we knew it, we had left the ground.</h1>
        <ButtonComponent variant={'primary'} label="Button" iconLeft="bi bi-plus" disabled></ButtonComponent>
        <div className="mt-2">
          <ButtonComponent variant={'primary'} icon="bi bi-plus"></ButtonComponent>
        </div>

        {[
          'round-badge badge-primary',
          'round-badge badge-secondary',
          'round-badge badge-tertiary',
          'round-badge badge-success',
          'round-badge badge-warning',
          'round-badge badge-danger',
          'round-badge badge-info',
          'round-badge badge-dark'
        ].map((variant, idx) => {
          return (
            <div key={idx} className="mt-2">
              <BadgeComponent variant={variant} label="New"></BadgeComponent>
            </div>
          );
        })}
      </div>
    </>
  );
}

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

        <div className="mt-2">
          <BadgeComponent variant={'primary'} label="New"></BadgeComponent>
        </div>
      </div>
    </>
  );
}

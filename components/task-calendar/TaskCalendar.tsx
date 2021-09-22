import AvatarComponent from '../ui/avatar/Avatar';

export default function TaskCalendar() {
  return (
    <>
      <div className="container">
        <h1>Almost before we knew it, we had left the ground.</h1>

        <div className="mt-16">
          <AvatarComponent name="Luiz Henrique" size="xl" />
        </div>

        <div className="mt-16">
          <AvatarComponent name="Luiz Henrique" size="lg" />
        </div>

        <div className="mt-16">
          <AvatarComponent name="Luiz Henrique" />
        </div>

        <div className="mt-16">
          <AvatarComponent name="Luiz Henrique" size="sm" />
        </div>

        <div className="mt-16">
          <AvatarComponent name="Luiz Henrique" size="xs" />
        </div>

        <div className="mt-16">
          <AvatarComponent name="Luiz Henrique" size="xss" />
        </div>
      </div>
    </>
  );
}

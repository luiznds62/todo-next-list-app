import AvatarComponent from '../ui/avatar/Avatar';

export default function TaskCalendar() {
  return (
    <>
      <div className="container">
        <h1>Almost before we knew it, we had left the ground.</h1>

        <div className="row">
          <div className="col">
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
        </div>

        <div className="row">
          <div className="col">
            <div className="mt-16">
              <AvatarComponent name="Luiz Henrique" size="xl" type="round" />
            </div>

            <div className="mt-16">
              <AvatarComponent name="Luiz Henrique" size="lg" type="round" />
            </div>

            <div className="mt-16">
              <AvatarComponent name="Luiz Henrique" type="round" />
            </div>

            <div className="mt-16">
              <AvatarComponent name="Luiz Henrique" size="sm" type="round" />
            </div>

            <div className="mt-16">
              <AvatarComponent name="Luiz Henrique" size="xs" type="round" />
            </div>

            <div className="mt-16">
              <AvatarComponent name="Luiz Henrique" size="xss" type="round" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

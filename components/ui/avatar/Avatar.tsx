import { useEffect, useState } from 'react';

export default function AvatarComponent({ name, src, size, type }: any) {
  const [initials, setInitials] = useState('');

  useEffect(() => {
    if (name.split(' ').length > 1) {
      const tokens = name.split(' ');
      const first = tokens[0].charAt(0);
      const last = tokens[1].charAt(0);
      setInitials(`${first}${last}`);
    } else {
      setInitials(name.charAt(0));
    }
  }, [name, initials]);

  return (
    <div className="avatar-container">
      <div className={`${src ? 'image-avatar' : 'default-avatar'} ${size && `avatar-${size}`} ${type && `avatar-${type}`}`}>{initials}</div>
      {!type && <span className={size ? `avatar-status-${size}` : 'avatar-status-md'}></span>}
      {type && <span className={size ? `avatar-round-status-${size}` : 'avatar-round-status-md'}></span>}
    </div>
  );
}

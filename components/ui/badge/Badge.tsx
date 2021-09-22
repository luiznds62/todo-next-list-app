import { Badge } from 'react-bootstrap';

export default function BadgeComponent({ variant, label, pill }: any) {
  return (
    <Badge pill={pill === 'true'} bsPrefix={`badge ${variant}`} bg={variant.split('-').pop()}>
      {label}
    </Badge>
  );
}

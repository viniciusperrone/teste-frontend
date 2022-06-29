import { Icon } from '../../assets/Icon';
import { Container } from './style';

type PetProps = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  rotate: string;
  seconds?: string;
};

export function Pet({ top, left, right, bottom, rotate, seconds }: PetProps) {
  return (
    <Container
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      rotate={rotate}
      seconds={seconds}
    >
      <Icon />
    </Container>
  );
}

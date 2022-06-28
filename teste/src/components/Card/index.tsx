import { ReactNode } from 'react';
import { Background, Button, Image } from './style';

interface CardProps {
  type: 'dog' | 'cat';
  children?: ReactNode;
}

export function Card({ children, type }: CardProps) {
  return (
    <Background>
      <h1>{type === 'dog' ? 'Cachorrinho' : 'Gatinho'}</h1>
      <Image src="" alt="" />
      <Button>Gerar</Button>
    </Background>
  );
}

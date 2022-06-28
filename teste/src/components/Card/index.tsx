import { ReactNode } from 'react';
import { Background } from './style';

interface CardProps {
  children?: ReactNode;
}

export function Card({ children }: CardProps) {
  return <Background>{children}</Background>;
}

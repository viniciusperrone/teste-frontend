import { useTheme } from '../../hooks/useTheme';
import { Waves } from '../Waves';
import {
  Background,
  ContainerText,
  Content,
  Title,
  Description,
} from './style';

export function Footer() {
  const { theme } = useTheme();
  return (
    <Background isDark={theme}>
      <Waves />
      <Content>
        <ContainerText>
          <Title>Vinicius Perrone</Title>
          <Description>
            © Todos os direitos reservados | 2022 | Feito com muito 💖 por
            Vinicius
          </Description>
        </ContainerText>
      </Content>
    </Background>
  );
}

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Waves } from '../Waves';
import {
  Background,
  ContainerIcons,
  ContainerText,
  Content,
  Title,
  Description,
  Icons,
  Link,
} from './style';

export function Footer() {
  return (
    <Background>
      <Waves />
      <Content>
        <ContainerText>
          <Title>Vinicius Perrone</Title>
          <Description>
            © Todos os direitos reservados | 2022 | Feito com muito 💖 por
            Vinicius
          </Description>
        </ContainerText>
        <ContainerIcons>
          <Icons>
            <Link
              href="https://github.com/viniciusperrone"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={30} />
            </Link>
          </Icons>
          <Icons>
            <Link
              href="https://www.linkedin.com/in/vinicius-perrone"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={30} />
            </Link>
          </Icons>
          <Icons>
            <Link
              href="https://instagram.com/portfolio.projects"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size={30} />
            </Link>
          </Icons>
        </ContainerIcons>
      </Content>
    </Background>
  );
}

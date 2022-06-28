import styled from 'styled-components';

type ThemeProps = {
  isDark: boolean;
}

export const Background = styled.footer<ThemeProps>`
  width: 100%;
  height: 200px;
  background-color: ${props => props.isDark ? '#3A3A41': '#F5F5F5'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding-top: 15vh;
`;
export const ContainerText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Title = styled.h2`
  font-size: 28px;
  font-family: "Fredoka";
  color: #fff;
`;
export const Description = styled.p`
  font-size: 20px;
  font-family: "Smooch Sans";
  color: #f5f5f5;
`;

export const ContainerIcons = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Icons = styled.div`
  margin: 0 10px;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #27282c;
`;

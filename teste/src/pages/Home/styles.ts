import styled from 'styled-components';

type ThemeProps = {
  isDark: boolean;
}

export const Background = styled.div<ThemeProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.isDark ? '#3A3A41': '#F5F5F5'};
`;
export const Section = styled.div<ThemeProps>`
  width: 100vw;
  height: 500px;
  background-color: ${props => props.isDark ? '#3A3A41': '#F5F5F5'};  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useTheme } from '../../hooks/useTheme';
import { Background, Section } from './styles';

export function Home() {
  const { theme } = useTheme();
  return (
    <Background isDark={theme}>
      <Header />
      <Section isDark={theme}>
        <Card></Card>
        <Card></Card>
      </Section>
      <Footer />
    </Background>
  );
}

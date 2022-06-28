import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Background, Section } from './styles';

export function Home() {
  return (
    <Background>
      <Header />
      <Section>
        <Card></Card>
        <Card></Card>
      </Section>
      <Footer />
    </Background>
  );
}

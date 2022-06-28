import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Background } from './styles';

export function Home() {
  return (
    <Background>
      <Header />
      <Card></Card>
      <Card></Card>
      <Footer />
    </Background>
  );
}

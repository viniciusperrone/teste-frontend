import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Background, Header } from './styles';

export function Home() {
  return (
    <Background>
      <Header>
        <h1>Pet Generate</h1>
      </Header>
      <Card></Card>
      <Card></Card>

      <Footer />
    </Background>
  );
}

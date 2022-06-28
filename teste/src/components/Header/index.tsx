import { BsFillCloudSunFill } from 'react-icons/bs';
import { Background } from './style';

export function Header() {
  return (
    <Background>
      <h1>Pet Generate</h1>
      <span>
        <BsFillCloudSunFill size={28} color={'#4B4E6D'} />
      </span>
    </Background>
  );
}

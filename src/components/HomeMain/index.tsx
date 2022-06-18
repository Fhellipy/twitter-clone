import { HomePage } from '../HomePage';
import { BottomMenu } from '../BottomMenu';

import { Container, Header, StarIcon } from './styles';

function HomeMain() {
  return (
    <Container>
      <Header>
        <div>
          <span>Home</span>
          <StarIcon />
        </div>
      </Header>

      <HomePage />

      <BottomMenu />
    </Container>
  );
}

export { HomeMain };

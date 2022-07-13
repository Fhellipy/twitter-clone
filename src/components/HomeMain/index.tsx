import { NavItem } from '../NavItem';
import { HomePage } from '../HomePage';

import { Container } from './styles';

function HomeMain() {
  return (
    <Container>
      <NavItem />
      <HomePage />
    </Container>
  );
}

export { HomeMain };

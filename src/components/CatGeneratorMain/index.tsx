import { CatGeneratorPage } from '../CatGeneratorPage';
import { NavItem } from '../NavItem';

import { Container } from './styles';

function CatGeneratorMain() {
  return (
    <Container>
      <NavItem />
      <CatGeneratorPage />
    </Container>
  );
}

export { CatGeneratorMain };

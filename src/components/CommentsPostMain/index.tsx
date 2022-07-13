import { CommentsPostPage } from '../CommentsPostPage';
import { NavItem } from '../NavItem';

import { Container } from './styles';

function CommentsPostMain() {
  return (
    <Container>
      <NavItem />
      <CommentsPostPage />
    </Container>
  );
}

export { CommentsPostMain };

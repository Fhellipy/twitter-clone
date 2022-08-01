import { Container } from './styles';

function NavItem() {
  return (
    <Container>
      <a href="/">
        <button data-cy="button-home">Home</button>
      </a>

      <a href="/cat_generator">
        <button data-cy="cat-generator">CatGenerator</button>
      </a>
     </Container>
  );
}

export { NavItem };

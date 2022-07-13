import { Container } from './styles';

function NavItem() {
  return (
    <Container>
      <a href="/">
        <button>Home</button>
      </a>

      <a href="/cat_generator">
        <button>CatGenerator</button>
      </a>
     </Container>
  );
}

export { NavItem };

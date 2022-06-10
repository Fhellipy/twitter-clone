import { ReactNode } from 'react';

import { Container, Item, Title } from './styles';

interface Props {
  title: string;
  elements: ReactNode[];
}

function List({ elements, title }: Props) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item> 
      ))}
    </Container>
  );
}

export { List };

import { HTMLAttributes } from 'react';
import { Container, Wrapper } from './styles';

interface DefaultTemplateProps extends HTMLAttributes<HTMLDivElement> {}

function DefaultTemplate(props: DefaultTemplateProps) {
  return (
    <Container>
      <Wrapper {...props}/>
    </Container>
  );
}

export { DefaultTemplate };

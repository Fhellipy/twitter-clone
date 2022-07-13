import { InterfaceComments } from '../../common/interfaces/InterfaceComments';

import {
  Container,
  Wrapper,
  UserEmail,
  UserName,
  ContentComments,
} from './styles';

function Comments({ body, name, email }: InterfaceComments) {
  return (
    <Container>
      <Wrapper>
        <UserEmail>{email}</UserEmail>
        <UserName>{name}</UserName>

        <ContentComments>{body}</ContentComments>
      </Wrapper>
    </Container>
  );
}

export { Comments };

import { useEffect, useState } from 'react';
import { InterfacePost } from '../../common/interfaces/InterfacePost';
import { InterfaceUser } from '../../common/interfaces/InterfaceUser';
import { Container, Avatar, Wrapper, UserName, ContentPost } from './styles';

function Post({ body, userId, id }: InterfacePost) {
  const [users, setUsers] = useState<InterfaceUser>();

  const urlImageUser =
    'https://avatars.dicebear.com/api/open-peeps/' + userId + '.svg';

  async function getInfoUser() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );

    setUsers(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  return (
    <Container>
      <a href={'/user/' + userId}>
        <Avatar>
          <img src={urlImageUser} alt="Usuário" />
        </Avatar>
      </a>

      <Wrapper>
        <UserName>{users?.name}</UserName>
        <a href={'/user/'+userId+'/comments/'+ id}>
          <ContentPost>{body}</ContentPost>
        </a>
      </Wrapper>
    </Container>
  );
}

export { Post };

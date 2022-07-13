import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InterfacePost } from '../../common/interfaces/InterfacePost';
import { InterfaceUser } from '../../common/interfaces/InterfaceUser';
import { Post } from '../Post';
import {
  Container,
  Banner,
  Wrapper,
  AnchorIcon,
  ImageUser,
  Tab,
  PostList,
} from './styles';

function ProfilePage() {
  const [posts, setPosts] = useState<InterfacePost[]>([]);
  const [user, setUser] = useState<InterfaceUser>();

  const { userId } = useParams();

  async function getPosts() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + userId
    );

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  const urlImageUser =
    'https://avatars.dicebear.com/api/open-peeps/' + userId + '.svg';

  async function getInfoUser() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );

    setUser(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  return (
    <Container>
      <Banner>
        <Wrapper>
          <AnchorIcon />
          <span>{user?.name}</span>
        </Wrapper>
        <ImageUser>
          <img
            src={
              'https://avatars.dicebear.com/api/open-peeps/' + userId + '.svg'
            }
            alt="Imagem do usuário"
          />
        </ImageUser>
        <Tab>
          <span>E-mail: {user?.email}</span>
          <span>Fone: {user?.phone}</span>
        </Tab>
      </Banner>

      {posts.map((post) => {
        return (
          <PostList>
            <Post {...post} />;
          </PostList>
        );
      })}
    </Container>
  );
}

export { ProfilePage };

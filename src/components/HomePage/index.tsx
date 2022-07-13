import { useEffect, useState } from 'react';
import { InterfacePost } from '../../common/interfaces/InterfacePost';
import { Post } from '../Post';
import { Container, Banner, Tab, AnchorIcon, PostList } from './styles';

function HomePage() {
  const [posts, setPosts] = useState<InterfacePost[]>([]);

  async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Banner>
        <img
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/A1A8/production/_109348314_gettyimages-923623146.jpg"
          alt="Imagem de várias árvores"
        />
        <span>Texto ilustrativo</span>
      </Banner>

      <Tab>
        <AnchorIcon />
        <span>Posts Recentes</span>
      </Tab>

      {posts.map((post) => {
        return (
          <PostList>
            <Post {...post} />
          </PostList>
        );
      })}
    </Container>
  );
}

export { HomePage };

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InterfaceComments } from '../../common/interfaces/InterfaceComments';
import { InterfacePost } from '../../common/interfaces/InterfacePost';
import { InterfaceUser } from '../../common/interfaces/InterfaceUser';
import { Comments } from '../Comments';
import { Post } from '../Post';
import {
  Container,
  Banner,
  AnchorIcon,
  Tab,
  PostList,
  PostComments,
} from './styles';

function CommentsPostPage() {
  const [posts, setPosts] = useState<InterfacePost[]>([]);
  const [user, setUser] = useState<InterfaceUser>();
  const [comments, setComments] = useState<InterfaceComments[]>([]);

  const { userId, postId } = useParams();

  async function getInfoUser() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );

    setUser(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  async function getPosts() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?id=' + postId
    );

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function getComments() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?postId=' + postId
    );

    setComments(await response.json());
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Container>
      <Banner>
        <Tab>
          <AnchorIcon />
          <span>Postagem de {user?.name}</span>
        </Tab>

        {posts.map((post) => {
          return (
            <PostList>
              <Post {...post} />;
            </PostList>
          );
        })}
      </Banner>

      {comments.map((comment) => {
        return (
          <PostComments>
            <Comments {...comment} />;
          </PostComments>
        );
      })}
    </Container>
  );
}

export { CommentsPostPage };

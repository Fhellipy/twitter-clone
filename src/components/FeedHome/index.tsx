import { useEffect, useState } from 'react';
import { Tweet } from '../../common/interfaces/Tweet';
import { ApiContent } from '../api/ApiContent';

import { TweetHome } from '../TweetHome';

import { Container, Tab, Tweets } from './styles';

function FeedHome() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tweets, setTweets] = useState<Tweet[]>([]);

  async function getData() {
    setLoading(true);

    try {
      const response = await ApiContent.get('');
      setTweets(response.data);
    } catch (error: any) {
      setError(error.message ?? 'Erro ao buscar tweets');
    }

    setLoading(false);
  }

  // 1 = component did mount / update | component will unmount
  // 2 = dependências | [state]
  useEffect(() => {
    getData();
  }, []);

  if (loading) return <b>Carregando...</b>;

  if (error) return <strong>{error}</strong>;

  return (
    <Container>
      <Tab>
        <span>Show 41 Tweets</span>
      </Tab>

      <Tweets>
        {tweets.map((tweet) => {
          return <TweetHome {...tweet} />;
        })}
      </Tweets>
    </Container>
  );
}

export { FeedHome };

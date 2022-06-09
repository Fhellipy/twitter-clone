import React from 'react';

import { Tweet } from '../Tweet';

import { Container, Tab, Tweets } from './styles';

function Feed() {
  return (
    <Container>
      <Tab>
        <span>Tweets</span>
        <span>Tweets & replies</span>
        <span>Media</span>
        <span>Likes</span>
      </Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export { Feed };

import Rapaiiz from '../../assets/rapaiiz.png';
import { apiImageUrl } from '../api/ApiImage';

import {
  Container,
  Retweeted,
  LogoIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
} from './styles';

import { Tweet } from '../../common/interfaces/Tweet';

function TweetHome({ body, userId }: Tweet) {
  const profilePictureUrl = apiImageUrl + userId + '.svg';

  return (
    <Container>
      <Retweeted>
        <LogoIcon>
          <img src={profilePictureUrl} alt="" />
        </LogoIcon>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar>
          <img src={profilePictureUrl} alt="" />
        </Avatar>
        <Content>
          <Header>
            <strong>Fulano</strong>
            <span>@_FulanoTweeteiro</span>
            <Dot />
            <time>09 de junho de 2022</time>
          </Header>

          <Description>{body}</Description>

          <ImageContent>
            <img src={Rapaiiz} alt="" />
          </ImageContent>

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              90
            </Status>

            <Status>
              <ShareIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export { TweetHome };

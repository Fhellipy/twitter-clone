import Logo from '../../assets/Logo.jpg';
import Rapaiiz from '../../assets/rapaiiz.png';

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

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <LogoIcon>
          <img src={Logo} alt="" />
        </LogoIcon>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar>
          <img src={Logo} alt="" />
        </Avatar>
        <Content>
          <Header>
            <strong>Fhellipy Conceição</strong>
            <span>@_Fhellipy</span>
            <Dot />
            <time>09 de junho de 2022</time>
          </Header>

          <Description>Foquete não tem ré!!!</Description>

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

export { Tweet };

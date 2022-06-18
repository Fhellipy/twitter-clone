import Logo from '../../assets/Logo.jpg';

import { FeedHome } from '../FeedHome';

import {
  Container,
  Wrapper,
  Avatar,
  NewTweet,
  HomeData,
  ImageIcon,
  GitIcon,
  EmoteSmileIcon,
  CalendarIcon,
  LocationIcon,
  EditButton,
} from './styles';

function HomePage() {
  return (
    <Container>
      <Wrapper>
        <a href="perfil">
          <Avatar>
            <img src={Logo} alt="" />
          </Avatar>
        </a>

        <NewTweet placeholder="What's happening?" />
      </Wrapper>

      <HomeData>
        <ul>
          <li>
            <ImageIcon />
          </li>

          <li>
            <GitIcon />
          </li>

          <li>
            <EmoteSmileIcon />
          </li>

          <li>
            <CalendarIcon />
          </li>

          <li>
            <LocationIcon />
          </li>
        </ul>
        <EditButton>Tweet</EditButton>
      </HomeData>

      <FeedHome />
    </Container>
  );
}

export { HomePage };

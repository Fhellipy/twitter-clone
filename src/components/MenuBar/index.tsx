import LogoImg from '../../assets/Logo.jpg';
import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  SearchIcon,
  HashIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

function MenuBar() {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <a href="/">
            <HomeIcon />
            <span>Home</span>
          </a>
        </MenuButton>

        <MenuButton>
          <SearchIcon />
          <HashIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>

        <MenuButton className="active">
          <a href="perfil">
            <ProfileIcon />
            <span>Perfil</span>
          </a>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar>
          <img src={LogoImg} alt="" />
        </Avatar>

        <ProfileData>
          <strong>Fhellipy Conceição</strong>
          <span>@_Fhellipy</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
}

export { MenuBar };

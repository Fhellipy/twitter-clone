import { ProfilePage } from '../ProfilePage';

import {
  Container,
  MenuBottom,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

function BottomMenu() {
  return (
    <Container>
      <MenuBottom>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </MenuBottom>
    </Container>
  );
}

export { BottomMenu };

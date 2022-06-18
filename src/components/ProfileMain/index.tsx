import { ProfilePage } from '../ProfilePage';
import { BottomMenu } from '../BottomMenu';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

function ProfileMain() {
  return (
    <Container>
      <Header>
        <button>
          <a href="/">
            <BackIcon />
          </a>
        </button>

        <ProfileInfo>
          <strong>_Fhellipy</strong>
          <span>32 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu />
    </Container>
  );
}

export { ProfileMain };

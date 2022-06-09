import Logo from '../../assets/Logo.jpg';

import { Feed } from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src={Logo} alt="" />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Fhellipy Conceição</h1>
        <h2>@_Fhellipy</h2>

        <p>Developer Web</p>

        <p>
          Instagram: <a href="https://instagram.com/_fhellipy">@_fhellipy</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Bahia, Basil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 03 de Maio de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>121</strong>
          </span>
          <span>
            <strong>215 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export { ProfilePage };

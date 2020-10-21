import React from 'react';

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

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Thomas Verdam</h1>
        <h2>@ftloshit</h2>

        <p>
          FrontEnd developer / GitHub: <a href="https://github.com/ThVerdam">ThVerdam</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de abril de 2000
          </li>
        </ul>

        <Followage>
          <span>
            <strong>294</strong> Seguindo
          </span>
          <span>
            <strong>140</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
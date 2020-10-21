import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';

import { 
  Container, 
  SearchWrapper, 
  SearchInput, 
  SearchIcon, 
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="Talvez você curta"
            element={[
              <FollowSuggestion 
                name="Juliana Fontes"
                nickname="@JuuhFtSouza"
              />,
              <FollowSuggestion 
                name="Julio Evangelista"
                nickname="@tijoIinho"
              />,
              <FollowSuggestion 
                name="Luiza Targino"
                nickname="@Dionisio__Lu"
              />
            ]}
          />
          <List 
            title="Assuntos do momento"
            element={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List 
            title="Assuntos do momento"
            element={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
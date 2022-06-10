import StickyBox from 'react-sticky-box';

import { List } from '../List';
import { FollowSuggestion } from '../FollowSuggestion';
import { News } from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Mount" nickname="@moount" />,

              <FollowSuggestion name="Paulista" nickname="@paulistafps1" />,

              <FollowSuggestion name="Zugor" nickname="@zugorow" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export { SideBar };

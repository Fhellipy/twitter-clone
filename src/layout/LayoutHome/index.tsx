import { HomeMain } from '../../components/HomeMain';
import { MenuBar } from '../../components/MenuBar';
import { SideBar } from '../../components/SideBar';
import { DefaultTemplate } from '../../templates/Default';

function LayoutHome() {
  return (
    <DefaultTemplate>
      <MenuBar />
      <HomeMain />
      <SideBar />
    </DefaultTemplate>
  );
}

export { LayoutHome };

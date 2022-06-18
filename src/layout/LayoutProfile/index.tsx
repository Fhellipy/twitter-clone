import { ProfileMain } from '../../components/ProfileMain';
import { MenuBar } from '../../components/MenuBar';
import { SideBar } from '../../components/SideBar';
import { DefaultTemplate } from '../../templates/Default';

function LayoutProfile() {
  return (
    <DefaultTemplate>
      <MenuBar />
      <ProfileMain />
      <SideBar />
    </DefaultTemplate>
  );
}

export { LayoutProfile };

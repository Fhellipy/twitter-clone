import { HomeMain } from '../../components/HomeMain';
import { DefaultTemplate } from '../../templates/Default';

function LayoutHome() {
  return (
    <DefaultTemplate>
      <HomeMain />
    </DefaultTemplate>
  );
}

export { LayoutHome };

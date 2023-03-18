import { useParams } from 'react-router-dom';

import { Sidebar } from '@/components';

import { MENUS } from '@/constants';

import * as S from './index.style';

const HomePage = () => {
  const { menu: currentMenu } = useParams();

  return (
    <S.Container>
      <Sidebar menus={MENUS} />
      <main>
        {[...Array(100)].map(() => (
          <div>{currentMenu}</div>
        ))}
      </main>
    </S.Container>
  );
};

export default HomePage;

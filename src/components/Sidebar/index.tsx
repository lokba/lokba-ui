import { Text } from '@lokba-ui/react';

import { Link, useParams } from 'react-router-dom';

import { Menu } from '@/types';

import * as S from './index.style';

type Props = {
  menus: Menu[];
};

const Sidebar = ({ menus }: Props) => {
  const { menu: currentMenu } = useParams();

  return (
    <S.Container>
      {menus.map(({ id, title, children }) => (
        <div key={id}>
          <Text as="p" fontSize="2rem" color="#37b24d" mt="1.5rem" mb="1.5rem">
            {title}
          </Text>
          <S.List>
            {children.map((menu) => (
              <S.Menu key={menu} active={menu === currentMenu}>
                <Link to={`/components/${menu}`}>{menu}</Link>
              </S.Menu>
            ))}
          </S.List>
        </div>
      ))}
    </S.Container>
  );
};

export default Sidebar;

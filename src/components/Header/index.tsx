import { Heading } from '@lokba-ui/react';

import { AiFillGithub } from 'react-icons/ai';

import { GITHUB_URL } from '@/constants';

import * as S from './index.style';

const Header = () => {
  return (
    <S.Container>
      <Heading as="h1">Lokba UI</Heading>
      <a href={GITHUB_URL} target="_blank">
        <AiFillGithub />
      </a>
    </S.Container>
  );
};

export default Header;

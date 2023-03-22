import { Divider, Spacing } from '@lokba-ui/react';

import { useParams } from 'react-router-dom';

import { CodeBlock, Pagination, Sidebar, TableOfContents } from '@/components';

import { MENUS } from '@/constants';

import * as S from './index.style';

const HomePage = () => {
  const { menu: title } = useParams();

  return (
    <S.Container>
      <Sidebar menus={MENUS} />
      <main>
        <S.Left>
          <S.Title>{title}</S.Title>
          <Divider height="2px" size="1rem" />
          <S.Description>
            {title} is the most abstract component on top of which all other Chakra UI components
            are built. By default, it renders a `div` element
          </S.Description>
          <Spacing size="4rem" />
          <S.Sub>Import</S.Sub>
          <CodeBlock lang="jsx" code={`import { ${title} } from '@lokba-ui/react'`} />
          <Spacing size="4rem" />
          <S.Sub>Example</S.Sub>
          <CodeBlock lang="jsx" code={EXAMPLE_CODE} />
          <Spacing size="8rem" />
          <Pagination
            previous={{ label: 'Box', url: '/components/Box' }}
            next={{ label: 'Container', url: '/components/Container' }}
          />
        </S.Left>
        <S.Right>
          <div>
            <TableOfContents contents={[`${title}`, 'Import', 'Example']} />
          </div>
        </S.Right>
      </main>
    </S.Container>
  );
};

const EXAMPLE_CODE = `<ClickArea
// CSS className
className={className}
// The function to invoke when clicked ('() => void')
onClick={onClick}
// If it can be clicked ('boolean')
enabled={enabled}
>
{children}
</ClickArea>`;

export default HomePage;

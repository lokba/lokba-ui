import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

import { Pre } from './index.style';

type Props = {
  code: string;
  lang: 'javascript' | 'jsx' | 'typescript' | 'tsx';
};

const CodeBlock = (props: Props) => {
  const { code, lang } = props;

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;

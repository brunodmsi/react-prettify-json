import React from 'react';

import { Container } from './styles';

interface PrettyJSONProps {
  jsonObject: object;
  colors?: {
    punctuation: string;
    key: string;
    value: string;
    string: string;
  };
}

const PrettyJSON: React.FC<PrettyJSONProps> = ({ jsonObject, colors }) => {
  const lib = {
    replacer(
      match: string,
      pIndent: string,
      pKey: string,
      pVal: string,
      pEnd: string,
    ) {
      const key = '<span class=json-key>';
      const val = '<span class=json-value>';
      const str = '<span class=json-string>';
      let r = pIndent || '';
      if (pKey) r = `${r + key + pKey}</span>: `;
      // .replace(/[": ]/g, '')
      if (pVal) r = `${r + (pVal[0] === '"' ? str : val) + pVal}</span>`;

      return r + (pEnd || '');
    },
    prettyPrint(obj: object) {
      const jsonLine = /^( *)("[@]*[\w+-\/\w+]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/gm;
      // const jsonLine = /^( *)("[\w-]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/gm;

      const htmlObject = JSON.stringify(obj, null, 3)
        .replace(/&/g, '&amp;')
        .replace(/\\"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(jsonLine, lib.replacer);

      return htmlObject;
    },
  };

  return (
    <Container colors={colors}>
      <pre>
        <code
          dangerouslySetInnerHTML={{ __html: lib.prettyPrint(jsonObject) }}
        />
      </pre>
    </Container>
  );
};

export default PrettyJSON;

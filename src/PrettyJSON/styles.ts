import styled from 'styled-components';

interface ContainerProps {
  colors?: {
    punctuation: string;
    key: string;
    value: string;
    string: string;
  };
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  font-size: 15px;

  pre {
    font-family: 'Fira Code', sans-serif;
    color: ${({ colors }) =>
      colors && colors.punctuation ? colors.punctuation : '#000'};
    .json-key {
      color: ${({ colors }) => (colors && colors.key ? colors.key : '#000')};
    }
    .json-value {
      color: ${({ colors }) =>
        colors && colors.value ? colors.value : '#000'};
    }
    .json-string {
      color: ${({ colors }) =>
        colors && colors.string ? colors.string : '#000'};
    }
  }
`;

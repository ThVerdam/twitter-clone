import React from 'react';

import { Container, Item, Title } from './styles';

interface Props {
  title: string;
  element: React.ReactNode[];
}

const List: React.FC<Props> = ({
  title, element
}) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {element.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;

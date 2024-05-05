import { Container, Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Container width="1400px">
      <Flex as="nav" justify="center" gap="50px" mb="20px">
        <NavLink to="/">Radix-ui</NavLink>
        <NavLink to="/shadcn">Shadcn</NavLink>
      </Flex>
    </Container>
  );
};

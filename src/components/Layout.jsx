import '@radix-ui/themes/styles.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Flex } from '@radix-ui/themes';

const Layout = () => {
  return (
    <Flex
      as="div"
      p="7"
      ml="auto"
      mr="auto"
      direction="column"
      justify="center"
      align="center"
      // width="1400px"
      color="gray"
      style={{
        background: '#f2f2f2',
      }}
    >
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Flex>
  );
};

export default Layout;

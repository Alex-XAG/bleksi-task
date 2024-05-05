import { Badge, Flex, Heading } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export const Title = () => {
  return (
    <Flex
      width="1400px"
      gap="20px"
      justify="between"
      align="center"
      mb="20px"
      p="15px"
      style={{
        background: '#ffffff',
      }}
    >
      <Heading as="h2" size="8" weight="regular" align="left" m="0">
        Nike Air Max 2090 (White/Black)
      </Heading>
      <Badge
        color="orange"
        size="3"
        style={{
          color: 'gray',
          textAlign: 'center',
          padding: '5px 10px',
        }}
      >
        Артикул: N28-001221
      </Badge>
    </Flex>
  );
};

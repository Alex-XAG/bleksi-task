import { Box, Flex, Heading, Select, Strong, Text } from '@radix-ui/themes';
import { useState } from 'react';

const sizes = [
  'Розмір-36',
  'Розмір-37',
  'Розмір-38',
  'Розмір-39',
  'Розмір-40',
  'Розмір-41',
];
const price = '4645,00';

export const Price = () => {
  const [q, setQ] = useState('1');

  const handleDecrement = () => {
    if (q <= 1) return;
    setQ(prev => prev - 1);
  };

  const handleIncrement = () => {
    setQ(prev => prev + 1);
  };

  const onChange = e => {
    setQ(e.target);
  };

  return (
    <>
      <Box ml="20px">
        <Text as="p" style={{ marginBottom: '10px', marginTop: '8px' }}>
          Вариант:
        </Text>
        <Select.Root
          defaultValue={sizes[0]}
          size="3"
          style={{ display: 'inline-block', width: '200px' }}
        >
          <Select.Trigger className="SelectTrigger" />
          <Select.Content>
            <Select.Group style={{ display: 'inline-block', width: '200px' }}>
              <Select.Label>Розміри</Select.Label>
              {sizes.map(size => (
                <Select.Item key={size} value={size}>
                  {size}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
        <Flex mt="20px" gap="15px">
          <Heading as="h2" size="8" className="HeadingPrice">
            {price}
            <Strong as="span"> грн</Strong>
          </Heading>

          <Flex className="CounterBox">
            <Text as="span" className="CounterSpan" onClick={handleDecrement}>
              -
            </Text>
            <input
              onChange={onChange}
              className="Input"
              type="text"
              id="firstName"
              value={q}
            />
            <Text as="span" className="CounterSpan" onClick={handleIncrement}>
              +
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

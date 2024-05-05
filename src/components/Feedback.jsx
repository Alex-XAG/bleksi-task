import { Box, Em, Flex, Link, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { GoStarFill } from 'react-icons/go';

export const Feedback = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = e => {
    setIsChecked(!isChecked);
  };

  const isCheck = () => (isChecked ? 'yellow' : '#f2f2f2');
  return (
    <Box p="15px" style={{ width: '650px', borderBottom: '1px solid #d4d4d4' }}>
      <Flex gap="10px">
        <IconContext.Provider
          value={{
            size: '20px',
            style: { color: isCheck() },
          }}
        >
          <div>
            <GoStarFill onClick={e => handleCheck(e)} />
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            size: '20px',
            style: { color: isCheck() },
          }}
        >
          <div>
            <GoStarFill onClick={handleCheck} />
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            size: '20px',
            style: { color: isCheck() },
          }}
        >
          <div>
            <GoStarFill onClick={handleCheck} />
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            size: '20px',
            style: { color: isCheck() },
          }}
        >
          <div>
            <GoStarFill onClick={handleCheck} />
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            size: '20px',
            style: { color: isCheck() },
          }}
        >
          <div>
            <GoStarFill onClick={handleCheck} />
          </div>
        </IconContext.Provider>
      </Flex>
      <Link size="4" href="#" underline="hover" color="gray" highContrast>
        <Em>Оставить отзыв </Em>
      </Link>
      <Text
        as="p"
        color="green"
        size="5"
        style={{
          marginTop: '15px',
        }}
      >
        Есть в наличии
      </Text>
    </Box>
  );
};

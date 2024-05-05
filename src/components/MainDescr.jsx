import { AspectRatio, Flex } from '@radix-ui/themes';
import { Feedback } from './Feedback';
import { Price } from './Price';

export const MainDescr = () => {
  return (
    <Flex gap="10px" style={{ backgroundColor: '#f2f2f2' }}>
      <AspectRatio
        ratio={14 / 8}
        style={{ width: '700px', height: '800px', border: '1px solid gray' }}
      >
        <img
          src="https://www.nike.org.ua/files/resized/products/75_1.700x800.png"
          alt="nike-cross"
          width={700}
          height={800}
        />
      </AspectRatio>

      <div
        style={{
          width: '650px',
          backgroundColor: '#ffffff',
          border: '1px solid gray',

          height: '770px',
        }}
      >
        <Feedback />
        <Price />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Flex>
  );
};

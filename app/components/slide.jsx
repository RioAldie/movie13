import Image from 'next/image';
import React from 'react';
import { datas } from '@/pages/dummy/data';

const Slide = (props) => {
  const { query } = props;
  console.log('dataku =>', datas);
  return (
    <div>
      {query}
      <Image src={''} />
    </div>
  );
};

export default Slide;

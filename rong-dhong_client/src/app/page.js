import Banner from '@/components/Banner/Banner';
import FlashSale from '@/components/Falsh Sale/FlashSale';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='max-w-7xl mx-auto'>
        <Banner />
        <FlashSale />
      </div>



    </div>
  );
};

export default page;
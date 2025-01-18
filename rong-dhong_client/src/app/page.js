import Banner from '@/components/Banner/Banner';
import BoxInfo from '@/components/BoxInfo/BoxInfo';
import Categories from '@/components/Categories/Categories';
import FlashSale from '@/components/Falsh Sale/FlashSale';
import JustForYou from '@/components/JustForYou/JustForYou';
import OurPaymentMethods from '@/components/OurPaymentMethods/OurPaymentMethods';
import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <div className='flex px-10 container max-w-7xl mx-auto flex-col gap-10'>

      <Banner />
      <FlashSale />
      <BoxInfo />
      <Categories />
      <JustForYou />
      <OurPaymentMethods />
    </div>
  );
};

export default page;
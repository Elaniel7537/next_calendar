import React from 'react';

import MainLayoutComponent from '@components/layout/MainLayoutComponent'
import MainCalenderComponent from '@components/calender/calenderComponent'

export const Home: React.FC = () => {

  return (
    <MainLayoutComponent>
      <MainCalenderComponent /> 
    </MainLayoutComponent>
  )
};

export default Home;
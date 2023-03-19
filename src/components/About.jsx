import React from 'react';
import { vic, kelly, grace, bollo } from '../assets';

const about = () => (
  <div>
    <h1 className='flex-1 font-poppins font-semibold text-olive text-center text-[52px] pt-10 pb-8'>Our Team</h1>
      <div class="gap-20 columns-4 px-10">
        <img src={vic} alt="victoria" className="w-full rounded-full"/>
        <img src={kelly} alt="kelly" className="w-full rounded-full"/>
        <img src={grace} alt="grace" className="w-full rounded-full"/>
        <img src={bollo} alt="billie" className="w-full rounded-full"/>
      </div>
      <div class="gap-20 columns-4 px-10 pt-3 pb-6">
        <h2 className='flex-1 font-poppins font-semibold text-olive text-center text-[22px]'>Victoria Chakma</h2>
        <h2 className='flex-1 font-poppins font-semibold text-olive text-center text-[22px]'>Kelly Ng</h2>
        <h2 className='flex-1 font-poppins font-semibold text-olive text-center text-[22px]'>Grace Tse</h2>
        <h2 className='flex-1 font-poppins font-semibold text-olive text-center text-[22px]'>Billie Zhang</h2>
      </div>
      <p className='flex-1 font-poppins font-medium text-olive text-center text-[20px] pt-5 pb-20'>Hello! We're the Ballin' Baos A.K.A. Team 5 of Hack the Globe 2023. EcoThreads is our take on combining fashion with sustainability for all individuals. We prioritize transparency, providing our users with the unbiased truth behind their favourite clothing brands. With an intiutive interface and collaborative elements, we hope to make sustainability as easy as choosing an outfit every morning.</p>
  </div>
)

export default about
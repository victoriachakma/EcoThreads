import React from 'react';
import { vic, kelly, grace, bollo } from '../assets';


const about = () => (
  <div>
    <h1>Our Team</h1>
      <div class="gap-20 columns-4">
        <img src={vic} alt="victoria" className="w-[250px] rounded-full"/>
        <img src={kelly} alt="kelly" className="w-[250px] rounded-full"/>
        <img src={grace} alt="grace" className="w-[250px] rounded-full"/>
        <img src={bollo} alt="billie" className="w-[250px] rounded-full"/>
      </div>
      <div class="gap-20 columns-4">
        <h1>Victoria Chakma</h1>
        <h1>Kelly Ng</h1>
        <h1>Grace Tse</h1>
        <h1>Billie Zhang</h1>
      </div>
  </div>
)

export default about
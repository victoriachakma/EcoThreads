//import { useState } from 'react';
import { longlogo } from '../assets';
import {Button} from "../components";

const Navbar = () => {

  //const [toggle, setToggle] = useState(false);

  return (
    
    <nav className='w-full flex py-0 justify-between items-center navbar'>
      <img src={longlogo} alt="longlogo" className="w-[350px]"/>
      <Button />
    </nav>

    

  )
}

export default Navbar
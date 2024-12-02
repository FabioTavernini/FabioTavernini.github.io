"use client";

import { SiCreality } from '@icons-pack/react-simple-icons';
import React from 'react';

export default function Page() {

  return (
    <div className="flex flex-col">

      <h2 className="text-xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight mb-5">
        3D-Printing
      </h2>


      <h3 className='text-xl'>Setup:</h3>

      <ul className='text-left list-disc m-5'>
        <li className='font-bold text-xl'><a className='text-blue-600' rel='noopener' target='_blank' href='/images/3dprinting/ender3v2neo.jpg'>Ender 3 V2 Neo</a></li>
        <li className='text-xl'>Dual Z Axis upgrade</li>
        <li className='text-xl'>
          <a className='text-blue-600' rel='noopener' target='_blank' href='/images/3dprinting/fan_fix.jpg'>Custom Fan shroud fix</a>
          
          <p className='text-sm'>Since the tiny soldering spots on the fan always kept breaking when taking of the fan shroud, i soldered some proper wire onto the connection and wired it up again with some luster terminals.</p>

          </li>
        <li className='text-xl'>Creality glass print plate</li>
      </ul>

      <SiCreality color='white' size={100}></SiCreality>
    
      

    </div>
    
  );
};


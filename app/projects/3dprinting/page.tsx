"use client";

import { SiCreality } from '@icons-pack/react-simple-icons';
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link } from "@nextui-org/react";
import React from 'react';

export default function Page() {

  return (
    <div className="flex flex-col">

      <h2 className="mb-10 bg-gradient-to-r from-yellow-400 to-red-600 text-transparent bg-clip-text font-bold text-2xl leading-2 sm:text-2xl sm:tracking-tight ">3D-Printing</h2>


      <Card className="border-2 border-white-400">
        <CardHeader>
          <h3 className='text-2xl'>Setup</h3>


        </CardHeader>



        <CardBody>
          <ul className='text-left list-disc m-5'>

            <li>
              <Link className='text-2xl font-bold' rel='noopener' target='_blank' href='/images/3dprinting/ender3v2neo.jpg'>Ender 3 V2 Neo</Link>
              <SiCreality color='white' className='mt-[-40px] mb-[-30px]' size={100}></SiCreality>
            </li>

            <li>
              <Link target="_blank" href="https://store.creality.com/eu/products/dual-screw-rod-upgrade-kit-for-ender-3-ender-3-pro-ender-3-v2-ender-3-neo-ender-3-v2-neo?srsltid=AfmBOordiYUUqNIrfSgyo86NAnLnO8mGecgQOp0_3HiSWl0VP7jIuAnf">Dual Z Axis upgrade</Link>
            </li>

            <li >
              <Link target="_blank" className='text-blue-600' rel='noopener' href='/images/3dprinting/fan_fix.jpg'>Custom Fan shroud fix</Link>

              <p className='text-sm'>Since the tiny soldering spots on the fan always kept breaking when taking of the fan shroud, i soldered some proper wire onto the connection and wired it up again with some luster terminals.</p>

            </li>
            <li>
              <Link target="_blank" href="https://store.creality.com/eu/collections/accessories/products/ender-3-carborundum-glass-platform-235-235mm?spm=..collection_9813d596-2ab3-49db-bfa8-a20eb9964ebc.collection_custom_1.8&spm_prev=..product_88cbf05c-480e-413b-a0c8-864a086d2f4d.breadcrumbs_1.1">Creality glass print plate</Link>
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card className="border-2 border-white-400 mt-5">
        <CardHeader>
          <h3 className='text-2xl'>STL files</h3>
        </CardHeader>

        <CardBody>
          <ul className='text-left m-5'>

            <li>

              <Link className="text-xl" href="https://www.thingiverse.com/ftave/designs">
                Thingiverse page
              </Link>

              <ul className='list-disc ml-10'>
                <li>
                  <Link target="_blank" href="https://www.thingiverse.com/thing:6911226">Gridfinity SFP holder</Link>
                </li>

                <li>
                  <Link target="_blank" href="https://www.thingiverse.com/thing:5923376">Alfa romeo GTV6 Radio cover</Link>
                </li>

                <li>
                  <Link target="_blank" href="https://www.thingiverse.com/thing:6911332">Zyxel switch rack mount</Link>
                </li>

              </ul>
            </li>

          </ul>

        </CardBody>
      </Card>
    </div>

  );
};


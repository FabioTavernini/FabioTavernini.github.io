"use client";

import { SiCreality } from '@icons-pack/react-simple-icons';
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link } from "@heroui/react";
import React from 'react';

type Upgrade = {
  label: string;
  url: string;
  description?: string;
};

type Printer = {
  name: string;
  image?: string;
  upgrades: Upgrade[];
};


const printers: Printer[] = [
    {
    name: "Creality K1",
    upgrades: [
      {
        label: "Klipper firmware",
        url: "https://www.klipper3d.org/",
      },
    ],
  },
  {
    name: "Creality Ender 3 V2 Neo",
    upgrades: [
      {
        label: "Dual Z Axis upgrade",
        url: "https://store.creality.com/eu/products/dual-screw-rod-upgrade-kit-for-ender-3-ender-3-pro-ender-3-v2-ender-3-neo-ender-3-v2-neo?srsltid=AfmBOordiYUUqNIrfSgyo86NAnLnO8mGecgQOp0_3HiSWl0VP7jIuAnf",
      },
      {
        label: "Custom Fan shroud fix",
        url: "/images/3dprinting/fan_fix.jpg",
        description:
          "Since the tiny soldering spots on the fan always kept breaking when taking off the fan shroud, I soldered some proper wire onto the connection and wired it up again with some luster terminals.",
      },
      {
        label: "Creality glass print plate",
        url: "https://store.creality.com/eu/collections/accessories/products/ender-3-carborundum-glass-platform-235-235mm",
      },
    ],
  }
];



export default function Page() {

  return (
    <div className="flex flex-col">

      <h2 className="mb-10 bg-gradient-to-r from-yellow-400 to-red-600 text-transparent bg-clip-text font-bold text-2xl leading-2 sm:text-2xl sm:tracking-tight ">3D-Printing</h2>


      <Card className="border-2 border-white-400">
        <CardHeader>
          <h3 className='text-2xl'>Printers & Setup</h3>

        </CardHeader>

        <CardBody>
          <ul className="text-left list-disc m-5">
            {printers.map((printer, idx) => (
              <li key={idx} className="mb-3">
                <h2
                  className="text-2xl font-bold"
                >
                  {printer.name}
                </h2>
                <ul className="ml-5 list-disc text-base mt-2">
                  {printer.upgrades.map((upgrade, uIdx) => (
                    <li key={uIdx} className="mb-2">
                      <Link
                        target="_blank"
                        rel="noopener"
                        href={upgrade.url}
                        className={upgrade.url.endsWith(".jpg") ? "text-blue-600" : ""}
                      >
                        {upgrade.label}
                      </Link>
                      {upgrade.description && (
                        <p className="text-sm mt-1">{upgrade.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
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
                  <Link target="_blank" href="https://www.thingiverse.com/thing:6944060">E30 Dash USB Charger</Link>
                </li>

                <li>
                  <Link target="_blank" href="https://www.thingiverse.com/thing:7075834">Remix of Raspberry Pi Holder</Link>
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


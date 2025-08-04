"use client";

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
        description: "adds loads of stability to x axis"
      },
      {
        label: "Custom Fan shroud",
        url: "https://www.printables.com/model/389830-neo-thang",
        description:
          "Since part cooling is not the best on the Ender 3 V2 Neo, I designed a custom fan shroud that improves airflow and cooling.",
      },
      {
        label: "Bi-Metal Heat Break",
        url: "https://de.aliexpress.com/item/1005007715765619.html?spm=a2g0o.productlist.main.1.2d925ca6LIePqc&algo_pvid=a9543792-b122-495f-8f06-d68be01a3262&pdp_ext_f=%7B%22order%22%3A%2299%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
        description:
          "Faster heat-up times and better thermal performance.",
      },
      {
        label: "Klipper firmware",
        url: "https://www.printables.com/model/389830-neo-thang",
        description:
          "Klipper with a raspberry pi is loads of fun. Allows for advanced features like pressure advance, input shaping, and more.",
      },
      {
        label: "Dual gear extruder",
        url: "https://de.aliexpress.com/item/1005007660748539.html?spm=a2g0o.productlist.main.1.14fe43d7CQJ4w0&algo_pvid=68d1a80f-84ca-4de5-9352-e5bbf91cf33f&pdp_ext_f=%7B%22order%22%3A%22236%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
        description:
          "Dual gear extruder as an upgrade for the Ender 3 V2 Neo. It improves the extrusion force and reliability.",
      },
      {
        label: "Rubber Bed spacers",
        url: "https://de.aliexpress.com/item/1005007300734604.html?spm=a2g0o.productlist.main.14.34044fd4REX4Vl&algo_pvid=d9926a5a-319e-4c03-86f3-8803d3a0bba9&pdp_ext_f=%7B%22order%22%3A%22811%22%2C%22eval%22%3A%221%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
        description:
          "Help with bed-leveling and prevent the bed from getting out of whack over time.",
      }
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


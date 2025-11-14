"use client";

import {
  SiArgo,
  SiDebian,
  SiDell,
  SiDiagramsdotnet,
  SiDocker,
  SiFreebsd,
  SiFreenas,
  SiGitea,
  SiHp,
  SiJellyfin,
  SiKubernetes,
  SiProxmox,
  SiTplink,
  SiUbuntu,
  SiWireguard,
} from "@icons-pack/react-simple-icons";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  const handleButtonClick = () => {
    // Redirect to the /projects page
    window.open(
      "https://github.com/FabioTavernini/FabioTavernini.github.io",
      "_blank",
    );
  };

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Link
        className="col-span-12 sm:col-span-4 h-[300px]"
        href={"/projects/photography"}
      >
        <Card className="col-span-12 sm:col-span-4 h-[300px] hover:ring-2 ring-blue-500 rounded-2xl">
          <CardHeader className="absolute flex-col !items-start bg-black/50 justify-between">
            <p className="text-tiny text-white/60 uppercase font-bold">
              photography
            </p>
            <h4 className="text-white font-medium text-large">Gallery</h4>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/images/thumbnails/antelope_canyon.webp"
          />
        </Card>
      </Link>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            some of my work
          </p>
          <h4 className="text-white font-medium text-large">Tinkering</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-3.jpeg"
        />
      </Card>

      <Link
        className="col-span-12 sm:col-span-4 h-[300px]"
        href={"/projects/homelab"}
      >
        <Card className="col-span-12 sm:col-span-4 h-[300px] hover:ring-2 ring-blue-500 rounded-2xl">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Server stuff
            </p>
            <h4 className="text-white font-medium text-large">Homelab</h4>
          </CardHeader>

          <div className="z-0 w-auto h-full mt-[75px] flex flex-row flex-wrap justify-center align-center">
            <SiDell color="default" size={40} />
            <SiHp color="default" size={40} />
            <SiTplink color="default" size={40} />
            <SiProxmox color="default" size={40} />
            <SiWireguard color="default" size={40} />
            <SiFreenas color="default" size={40} />
            <SiGitea color="default" size={40} />
            <SiFreebsd color="default" size={40} />
            <SiDebian color="default" size={40} />
            <SiUbuntu color="default" size={40} />
            <SiJellyfin color="default" size={40} />
            <SiKubernetes color="default" size={40} />
            <SiDocker color="default" size={40} />
            <SiArgo color="default" size={40} />
            <SiDiagramsdotnet color="default" size={40} />
          </div>
        </Card>
      </Link>

      <Link
        className="col-span-12 sm:col-span-5 h-[300px] hover:ring-2 ring-blue-500 rounded-2xl"
        href={"/projects/3dprinting"}
      >
        <Card className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute flex-col !items-start bg-black/70 justify-between">
            <p className="text-tiny text-white uppercase font-bold">
              STL Files & More
            </p>
            <h4 className="text-white font-medium text-xl">3D-Printing</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="3dprinter background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://media.elv.com/pdsquare/253165_hb.jpg"
          />
        </Card>
      </Link>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            NextJS, TailwindCSS & Netlify
          </p>
          <h4 className="text-white/90 font-medium text-xl">This website</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/gifs/githubcard.gif"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center" />
          <Button
            className="hover:ring-2 ring-blue-500 rounded-2xl"
            endContent={<FaGithub size={20} />}
            radius="full"
            size="sm"
            onClick={handleButtonClick}
          >
            View on GitHub
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

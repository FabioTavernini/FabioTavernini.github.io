"use client";

import { Code } from "@nextui-org/react";
import Image from 'next/image';
import me from '../public/images/BW.webp'
import Link from "next/link";

export default function HomePage() {

  return (
    <section className="flex flex-wrap items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-wrap flex-col w-full items-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          Fabio Tavernini
        </h1>

        <div className="w-full max-w-md">
          <Code color="default">{`import { Skills, Projects } from "@tavernini/dev";`}</Code>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row ml-5 w-[98vw]">

        <svg width="0" height="0">
          <filter
            id="ambilight"
            width="300%"
            height="300%"
            x="-0.75"
            y="-0.75"
            colorInterpolationFilters="sRGB"
          >
            <feOffset in="SourceGraphic" result="source-copy" />
            <feColorMatrix
              in="source-copy"
              type="saturate"
              values="3"
              result="saturated-copy"
            />
            <feColorMatrix
              in="saturated-copy"
              type="matrix"
              values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    33 33 33 101 -132"
              result="bright-colors"
            />
            <feMorphology
              in="bright-colors"
              operator="dilate"
              radius="10"
              result="spread"
            />
            <feGaussianBlur
              in="spread"
              stdDeviation="30"
              result="ambilight-light"
            />
            <feOffset in="SourceGraphic" result="source" />
            <feComposite in="source" in2="ambilight-light" operator="over" />
          </filter>
        </svg>

        <Image
          id="BW"
          src={me}
          alt="test"
          className="rounded-lg md:w-1/2"
          priority // LCP 
          sizes="(max-width: 768px) 50vw, 33vw" // Ensure proper responsive sizes
          placeholder="blur"
        />

        <div className="w-[85vw] m-5 md:w-full">

          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">Why this page</h2>
          <h3 className="text-gray-400">About this page</h3>
          <p>I wanted to try out some new web technologies, thats part of why this site was created. Normally dabble in Powershell scripting, Legacy PHP Web-Apps and old VB Code. So for a change i wanted to test myself with some of the new stuff :)</p>

          <br></br>
          <hr></hr>
          <br></br>

          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">What i do</h2>
          <h3 className="text-gray-400">About me</h3>
          <p>Im an Application Manager at <Link className="text-blue-500" href={"https://itsh.ch"}>ITSH.ch</Link> and am responsible for a number of legacy PHP apps, aswell as many diffrent Powershell automation Jobs. if you&apos;d like to see my CV, you can do so here: <Link className="text-blue-500" href={"https://cv.tavernini.online"}>CV</Link>.</p>

          <br></br>
          <hr></hr>
          <br></br>

          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">Some more stuff</h2>
          <h3 className="text-gray-400">Extras</h3>
          <p>Lately i tried out diffrent JS Frameworks, im trying to get a better skillset in modern web-stacks.
            Angular and NextJS seem pretty nice to get my feet wet. This site is built with NextJS and TailwindCSS. - with NextJS being completely overkill of course :P</p>

        </div>
      </div>
    </section>
  );

}

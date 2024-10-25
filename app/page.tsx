// page.tsx

"use client";

import React, { useState } from "react";
import {Code} from "@nextui-org/react";
import Image from "next/image";

const AccordionItem: React.FC<{
  title: string;
  subtitle?: React.ReactNode; // Optional subtitle prop
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}> = ({ title, subtitle, isOpen, onToggle, children }) => {
  return (


    <div className=" mb-2">
      <div
        className="flex justify-between items-center p-4 rounded-lg bg-black cursor-pointer"
        onClick={onToggle}
      >
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
        <span className="text-white">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="p-4 bg-black text-white">{children}</div>}
    </div>


  );
};

const HomePage: React.FC = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (

    <section className="flex flex-wrap items-center justify-center gap-4 py-8 md:py-10">

<div className="flex flex-wrap flex-col w-full items-center">

<h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
        Fabio Tavernini
      </h1>
      

      <div className="w-full max-w-md">
      <Code color="danger">npm install @webdev/FabioTavernini</Code>
      </div>

      </div>



<div className="flex justify-center items-center">



      <img 
      src={"/images/BW.jpg"}
      alt="test"
      className="w-2/4"
      >
      </img>

<div className="w-full">
      <div className="w-3/4 max-h-full border rounded-lg">
        <AccordionItem
          title="Accordion 1"
          isOpen={openIndex === 0}
          subtitle={<span>Press to expand <strong>key 1</strong></span>}
          onToggle={() => toggleAccordion(0)}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          title="Accordion 2"
          isOpen={openIndex === 1}
          subtitle={<span>Press to expand <strong>key 2</strong></span>}          onToggle={() => toggleAccordion(1)}
        >
          {defaultContent}
         
        </AccordionItem>
        <AccordionItem
          title="Accordion 3"
          isOpen={openIndex === 2}
          subtitle={<span>Press to expand <strong>key 3</strong></span>}
          onToggle={() => toggleAccordion(2)}
        >
          {defaultContent}
        </AccordionItem>
      </div>
      </div>

      </div>

    </section>
  );
};

export default HomePage;

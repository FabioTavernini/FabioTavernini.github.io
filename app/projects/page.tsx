"use client"

import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";  
import Link from "next/link";


import { FaGithub } from 'react-icons/fa';

export default function ProjectsPage() {


  const handleButtonClick = () => {
    // Redirect to the /projects page
    window.open("https://github.com/FabioTavernini/FabioTavernini.github.io", "_blank");
  };




  return (

    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">


<Link className="col-span-12 sm:col-span-4 h-[300px]" href={"/projects/photography"}>

    <Card className="col-span-12 sm:col-span-4 h-[300px]">
   
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Photography</p>
        <h4 className="text-white font-medium text-large">Gallery</h4>
      </CardHeader>
      
      
      <Image
      
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-4.jpeg"
      />  
      
       </Card>

</Link>











      
    
 
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-3.jpeg"
      />
    </Card>




    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-2.jpeg"
      />
    </Card>




    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">STL Files & More</p>
        <h4 className="text-black font-medium text-2xl">3D-Printing</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://nextui.org/images/card-example-6.jpeg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
        </div>
        {/* <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button> */}
      </CardFooter>
    </Card>



    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">NextJS, Tailwind & Netlify</p>
        <h4 className="text-white/90 font-medium text-xl">This website</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-5.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">

 
        </div>
        <Button onClick={handleButtonClick} endContent={<FaGithub size={20} />} radius="full" size="sm">
            View on GitHub
          </Button>
                </CardFooter>
                
    </Card>





  </div>
  );
}
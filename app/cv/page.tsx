"use client"

import React from "react";
import { Card, CardHeader, CardBody, Button, Link, Avatar } from "@nextui-org/react";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBook, FaCamera, FaCar, FaCode, FaUtensilSpoon } from "react-icons/fa";



const cv = () => {

  const handlePrint = () => {
    window.print();
  };

  return (

    <div className="flex flex-col">

      <div className="w-full flex flex-wrap justify-around items-center mb-10">
        <div className="">
          <h1 className="text-4xl font-bold">Fabio Tavernini</h1>
          <h2 className="text-xl text-gray-400">Application manager</h2>
        </div>

        <div className="w-full flex justify-center mt-5">
          <Button onPress={handlePrint}>Download PDF</Button>
        </div>

      </div>


      <Card className="mb-10 border-2 border-white-500">
        <CardBody className="flex flex-row justify-between flex-wrap">
          <div className="p-5">
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="max-w-96">
              As a computer scientist, I am confronted with many techniques and problems.
              I am always looking for creative and effective solutions.
              I have already gained experience with many languages, including HTML, CSS, Powershell, Javascript, SQL, PHP and others.
              I also have expertise in managing and understanding legacy codebases.
            </p>
          </div>

          <div className="p-5">
            <Link href="/contact" className="text-2xl font-bold">Contact</Link>
            <p className="flex flex-col mt-5">
              <Link href="mailto:mail@tavernini.online ">mail@tavernini.online </Link>
              <Link href="/">www.tavernini.online</Link>
              <Link href="tel:+41 77 402 83 94">+41 77 402 83 94</Link>
            </p>
          </div>
        </CardBody>
      </Card>

      <Card className="border-2 border-white-500 mb-10">
        <CardHeader className="text-2xl font-bold">Professional Experience</CardHeader>
        <CardBody>
          <VerticalTimeline layout="1-column-left" animate lineColor="blue">

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(73, 73, 73)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(73, 73, 73)' }}
              date="2022 - present"
              iconStyle={{ background: 'rgb(0, 106, 192)', color: '#fff' }}
              icon={<img src="https://itsh.ch/typo3conf/ext/itsh_template/Resources/Public/Images/Logo_verlauf.svg" className="ml-1 mt-1" alt="icon" style={{ width: '30px', height: '30px' }} />}
            >
              <h3 className=" text-lg font-bold">Application Manager</h3>
              <h4 className=" text-gray-200">Informatik Schaffhausen</h4>

              <ul className="list-disc ml-5">
                <li>Maintenance of internal web portals with PHP and SQL</li>
                <li>Management of applications</li>

                <li>Introduction of version control system GIT</li>
                <ul>
                  <li>- Setup of GIT server with Gitea</li>
                  <li>- Setup of GIT server with Gitlab for automated deployments to VMWare Tanzu K8s</li>
                </ul>
                <li>Implementation of CI/CD pipelines</li>
                <li>Maintenance and management of PHP & VB legacy codebase</li>
                <li>Migration of web portals from PHP 5.2 to PHP 8.2.4</li>
                <li>Programming of multiple interfaces for applications.</li>
                <li>Management & Monitoring of various interfaces with <Link target="_blank" href="https://github.com/FabioTavernini/notify-threema-broadcast">Github actions</Link>, Powershell, Prtg & <Link target="_blank" href="https://threema.ch/en/work/clients/itsh">Threema</Link></li>
              </ul>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(73, 73, 73)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(73, 73, 73)' }}
              date="2018 - 2022"
              iconStyle={{ background: 'rgb(0, 106, 192)', color: '#fff' }}
              icon={<FaBook /> as React.ReactElement}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold"><Link className="text-lg font-bold" href="https://www.ict-berufsbildung.ch/grundbildung/ict-lehren/betriebsinformatiker-in-efz">Apprenticeship</Link> in IT (Swiss EFZ)</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-200">KSD Schaffhausen</h4>

              <ul className="list-disc ml-5">
                <li>Management of internal web forms</li>
                <li>Introduction of disk encryption</li>
              </ul>
            </VerticalTimelineElement>

          </VerticalTimeline>

        </CardBody>
      </Card>

      <Card className="border-2 border-white-500 mb-10">

        <CardHeader className="text-2xl font-bold">Intrests & Hobbies</CardHeader>

        <CardBody className="flex flex-row flex-wrap items-center ">

          <Link href="/projects/photography" className="m-2">
            <Button
              size="lg"
              startContent={<FaCamera />}
              className="border-2 hover:border-blue-500"
            >
              Photography
            </Button>
          </Link>

          <Link className="m-2">
            <Button
              disableAnimation
              size="lg"
              startContent={<FaCar />}
              className="border-2"
            >
              Cars
            </Button>
          </Link>

          <Link className="m-2">
            <Button
              disableAnimation
              size="lg"
              startContent={<FaUtensilSpoon />}
              className="border-2"
            >
              Cooking
            </Button>
          </Link>

          <Link href="/projects/3dprinting" className="m-2">
            <Button
              size="lg"
              startContent={<FaCamera />}
              className="border-2 hover:border-blue-500"
            >
              3D-Printing & Tinkering
            </Button>
          </Link>

          <Link href="https://github.com/FabioTavernini" className="m-2">
            <Button
              size="lg"
              startContent={<FaCode />}
              className="border-2 hover:border-blue-500"
            >
              Developing & Coding
            </Button>
          </Link>

        </CardBody>

      </Card>

      <Card className="border-2 border-white-500">

        <CardHeader className="text-2xl font-bold">References</CardHeader>


        <CardBody className="flex flex-row flex-wrap justify-around items-center">

          <Card className="border-2 border-white-500 mb-5 w-80 ">

            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  showFallback
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">Dominik Uehlinger</h4>
                  <h5 className="text-small tracking-tight text-default-400">Georg Fischer AG</h5>
                </div>
              </div>

            </CardHeader>

            <CardBody className="px-3 py-0 text-small text-default-400">

              <p className="min-h-10">ICT Coordinator</p>

              <p>
                <Link href="mailto:dominik.uehlinger@georgfischer.com">dominik.uehlinger@georgfischer.com</Link> <br />
                <Link href="tel:+41 79 839 52 75">+41 79 839 52 75</Link>
              </p>

            </CardBody>

          </Card>

          <Card className=" border-2 border-white-500 mb-5 w-80">

            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  showFallback
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">Patrik Decurtins</h4>
                  <h5 className="text-small tracking-tight text-default-400">ITSH Schaffhausen</h5>
                </div>
              </div>

            </CardHeader>

            <CardBody className="px-3 py-0 text-small text-default-400">

              <p className="min-h-10">Team-Leader Customer Solutions</p>

              <p>
                <Link href="mailto:patrik.decurtins@itsh.ch">patrik.decurtins@itsh.ch</Link> <br />
                <Link href="tel:++41 79 571 27 18">+41 79 571 27 18</Link>
              </p>

            </CardBody>

          </Card>
          <Card className=" border-2 border-white-500 w-80 md:mb-5">

            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  showFallback
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">Marco Schirru</h4>
                  <h5 className="text-small tracking-tight text-default-400">ITSH Schaffhausen</h5>
                </div>
              </div>

            </CardHeader>

            <CardBody className="px-3 py-0 text-small text-default-400">

              <p className="min-h-10"> Head of department & <br></br> Member of executive board </p>

              <p>
                <Link href="mailto:marco.schirru@itsh.ch">marco.schirru@itsh.ch</Link> <br />
                <Link href="tel:+41 52 632 70 52">+41 52 632 70 52</Link>
              </p>

            </CardBody>

          </Card>
        </CardBody>
      </Card>





    </div>

  );
};

export default cv;

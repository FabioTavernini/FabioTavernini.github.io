"use client"

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link, Chip, Avatar } from "@nextui-org/react";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBeer, FaBook, FaCamera, FaCar, FaCode, FaSwimmingPool, FaUtensilSpoon } from "react-icons/fa";

const cv = () => {


  return (

    <div className=" flex flex-col">

      <div className="w-3/4 flex flex-wrap justify-around items-center mb-10">
        <div className="">
          <h1 className="text-4xl font-bold">Fabio Tavernini</h1>
          <h2 className="text-xl text-gray-400">Application manager</h2>
        </div>

        <div className="">
          {/* <Button>Download PDF</Button> */}
        </div>

      </div>


      <Card className="mb-10 border-2 border-blue-500">
        <CardBody className="flex flex-row justify-between flex-wrap">
          <div className="links">
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="max-w-96">
              As a computer scientist, I am confronted with many techniques and problems.
              I am always looking for creative and effective solutions.
              I have already gained experience with many languages, including HTML, CSS, Powershell, Javascript, SQL, PHP and others.
              I also have expertise in managing and understanding legacy codebases.
            </p>
          </div>

          <div className="">
            <Link href="/contact" className="text-2xl font-bold">Contact</Link>
            <p className="flex flex-col mt-5">
              <Link href="mailto:mail@tavernini.online ">mail@tavernini.online </Link><br />
              <Link href="/">www.tavernini.online</Link><br />
              <Link href="tel:+41 77 402 83 94">+41 77 402 83 94</Link>
            </p>
          </div>
        </CardBody>
      </Card>

      <Card className="border-2 border-blue-500 mb-10">
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
                <li>Betreuung interner Web-Portale mit PHP und SQL</li>
                <li>Verwaltung von Applikationen</li>
                <li>Einführung Versionskontrollsystem GIT</li>
                <li>Aufbau von GIT-Server mit gitea</li>
                <li>Einführen CI/CD Pipelines</li>
                <li>Pflegen und Verwalten von PHP Legacy Codebase</li>
                <li>Migrieren von Web-Portalen von PHP 5.2 auf PHP 8.2.4</li>
                <li>Verwaltung von diversen Schnittstellen mit VB, Powershell, MSSQL und PHP</li>
              </ul>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(73, 73, 73)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(73, 73, 73)' }}
              date="2018 - 2022"
              iconStyle={{ background: 'rgb(0, 106, 192)', color: '#fff' }}
              icon={<FaBook />}
            >
              <h3 className="vertical-timeline-element-title">Ausbildung zum Informatiker EFZ</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-200">KSD Schaffhausen</h4>

              <ul className="list-disc ml-5">
                <li>
                  Übernahme interner Webformulare
                </li>
                <li>
                  Einführung Festplattenverschlüsselung
                </li>
              </ul>
            </VerticalTimelineElement>

          </VerticalTimeline>

        </CardBody>
      </Card>


      <Card className="border-2 border-blue-500 mb-10">

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



      <Card className="border-2 border-blue-500 mb-10 ">

        <CardHeader className="text-2xl font-bold">References</CardHeader>


        <CardBody className="flex flex-row flex-wrap justify-around items-center">

          <Card className="border-2 border-white-500 mb-10 w-80 ">

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

              <p>ICT Coordinator</p>

              <p>
                <Link href="mailto:dominik.uehlinger@georgfischer.com">dominik.uehlinger@georgfischer.com</Link> <br />
                <Link href="tel:+41 79 839 52 75">+41 79 839 52 75</Link>
              </p>

            </CardBody>

          </Card>

          <Card className=" border-2 border-white-500 mb-10 w-80">

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

              <p>Teamleiter Customer Solutions</p>

              <p>
                <Link href="mailto:patrik.decurtins@itsh.ch">patrik.decurtins@itsh.ch</Link> <br />
                <Link href="tel:++41 79 571 27 18">+41 79 571 27 18</Link>
              </p>

            </CardBody>

          </Card>
          <Card className=" border-2 border-white-500 mb-10 w-80">

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

              <p>Abteilungsleiter & Mitglied GL</p>

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

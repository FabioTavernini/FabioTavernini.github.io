import { Code } from "@heroui/react";
import { Image } from "@heroui/image";
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
        <div className="flex justify-center">
          <Image
            alt="Portrait of me :)"
            className="rounded-lg w-11/12"
            src="/images/BW-opt.webp"
            loading="eager"
          />
        </div>


        <div className="w-[85vw] m-5 md:w-full">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
            Why this page
          </h2>
          <h3 className="text-gray-400">About this page</h3>
          <p>
            I wanted to try out some new web technologies, thats part of why
            this site was created. Normally dabble in Powershell scripting,
            Legacy PHP Web-Apps and old VB Code. So for a change i wanted to
            test myself with some of the new stuff :)
          </p>

          <br />
          <hr />
          <br />

          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
            What i do
          </h2>
          <h3 className="text-gray-400">About me</h3>
          <p>
            I&apos;m an Application Manager at{" "}
            <Link className="text-blue-500" href="https://itsh.ch">
              ITSH.ch
            </Link>
            , responsible for a number of legacy PHP apps, various PowerShell
            automation jobs, and partially managing our internal VMware Tanzu
            Kubernetes platform (all on-prem) along with our GitOps workflows.
            If you&apos;d like to see my CV, you can do so here:{" "}
            <Link className="text-blue-500" href="https://tavernini.online/cv">
              CV
            </Link>
            .
          </p>

          <br />
          <hr />
          <br />

          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
            Some more stuff
          </h2>
          <h3 className="text-gray-400">Extras</h3>
          <p>
            Lately i tried out diffrent JS Frameworks, im trying to get a better
            skillset in modern web-stacks. Angular and NextJS seem pretty nice
            to get my feet wet. This site is built with NextJS and TailwindCSS.
            - with NextJS being completely overkill of course :P
          </p>
        </div>
      </div>
    </section>
  );
}

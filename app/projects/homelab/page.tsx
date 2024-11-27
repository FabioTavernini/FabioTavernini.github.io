"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

interface DiagramData {
  link: string;
}

export default function Page() {
  const [data, setData] = useState<DiagramData | null>(null); // Define the type of `data`

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/diagrams/diagram.json'); // Fetch from the public folder
        if (!response.ok) throw new Error('Failed to fetch data');
        const result: DiagramData = await response.json(); // Explicitly type the fetched data
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight mb-5">
        My Homelab Setup
      </h2>

      <h3 className="text-lg font-semibold mb-3">Diagram</h3>

      <div id="diagram" className="p-4 rounded-lg">
        <p className="mb-3">Diagram is made with draw.io</p>
        <Link target="_blank" href={data.link}>
          <Button className="m-1 bg-blue-600 text-white hover:bg-blue-700">
            View Diagram
          </Button>
        </Link>

        <p className="mt-4 leading-relaxed">
          Here, I explore, experiment, and build with new (at least to me)
          technologies to deepen skills in DevOps and system automation.<wbr></wbr>
          My setup features a Proxmox host running two virtual machines
          configured as a Kubernetes cluster.
        </p>

        <p className="mt-4 leading-relaxed">
          Within this cluster, I&apos;ve deployed:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Gitea</strong>: A Git server to manage my repositories.</li>
          <li><strong>Jenkins</strong>: A robust CI/CD pipeline to streamline build, test, and deployment processes.</li>
          <li><strong>ArgoCD</strong>: A powerful tool for GitOps-driven container and deployment orchestration.</li>
        </ul>

      </div>
    </div>
  );
};


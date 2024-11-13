// page.tsx

"use client"

import React from 'react';
import { DrawIoEmbed } from 'react-drawio';
import xmldiagram from './diagram';

export default function Page() {
  return (
    <div className='flex flex-col'>

      <h2 className=''>Diagram</h2>

      <div id='diagram'>
        <DrawIoEmbed

          xml={xmldiagram}

          urlParameters={{
            ui: "kennedy",
            spin: true,
            lightbox: true
          }}

        />
      </div>

    </div>
  );
}

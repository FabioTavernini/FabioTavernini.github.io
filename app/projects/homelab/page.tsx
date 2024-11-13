"use client"

import { lightLayout } from '@nextui-org/theme';
import { DrawIoEmbed } from 'react-drawio';


export default function App() {


  return (

    <div className=''>
      <DrawIoEmbed
        xml='
      <mxfile host="Electron" modified="2024-11-13T13:01:37.983Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/24.6.1 Chrome/124.0.6367.207 Electron/30.0.6 Safari/537.36" etag="aR6-rn1Qy6JIp-BZ5XbI" version="24.6.1" type="device">
  <diagram name="Page-1" id="K_0ErVeAuzA7R4lTPcwR">
    <mxGraphModel dx="574" dy="334" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="WE9UcnBl8YrHvaGG10Ux-2" value="" style="strokeColor=#666666;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rackGeneral.rackCabinet3;fillColor2=#f4f4f4;container=1;collapsible=0;childLayout=rack;allowGaps=1;marginLeft=33;marginRight=9;marginTop=21;marginBottom=22;textColor=#666666;numDisp=ascend;" vertex="1" parent="1">
          <mxGeometry x="249" y="570" width="204" height="190" as="geometry" />
        </mxCell>
        <mxCell id="WE9UcnBl8YrHvaGG10Ux-8" value="" style="strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.1u_rack_server;" vertex="1" parent="WE9UcnBl8YrHvaGG10Ux-2">
          <mxGeometry x="33" y="21" width="162" height="49" as="geometry" />
        </mxCell>
        <mxCell id="WE9UcnBl8YrHvaGG10Ux-7" value="" style="shape=mxgraph.rack.hp.hp_proliant_dl380p_g8;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;" vertex="1" parent="WE9UcnBl8YrHvaGG10Ux-2">
          <mxGeometry x="33" y="70" width="162" height="30" as="geometry" />
        </mxCell>
        <mxCell id="WE9UcnBl8YrHvaGG10Ux-6" value="" style="shape=mxgraph.rack.hp.hp_proliant_dl380p_g8;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;" vertex="1" parent="WE9UcnBl8YrHvaGG10Ux-2">
          <mxGeometry x="33" y="100" width="162" height="30" as="geometry" />
        </mxCell>
        <mxCell id="WE9UcnBl8YrHvaGG10Ux-3" value="" style="strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.dell_poweredge_2u;" vertex="1" parent="WE9UcnBl8YrHvaGG10Ux-2">
          <mxGeometry x="33" y="130" width="162" height="30" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
      '
        urlParameters={{
          lightbox: true,
          ui: 'kennedy',
        }}
      />
    </div>

  );




}

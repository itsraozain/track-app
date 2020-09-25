import React from "react";
import Svg, { Defs, Path, Use } from "react-native-svg";

function Bimage() {
  return (
    <Svg viewBox="0 0 640 640" width={640} height={640}>
      <Defs>
        <Path
          d="M388.07 132.73c10.57-3.22 21.74 2.75 24.95 13.32 10.63 34.99 36.72 120.84 47.35 155.83 3.21 10.57-2.75 21.74-13.32 24.95-30.17 9.17-101.54 30.85-131.7 40.02-10.57 3.21-21.74-2.76-24.95-13.32-10.64-35-36.72-120.84-47.35-155.84-3.21-10.57 2.75-21.74 13.32-24.95 30.17-9.16 101.53-30.85 131.7-40.01z"
          id="prefix__a"
        />
        <Path
          d="M441.18 264.71c11.04 0 20 8.95 20 20v248.23c0 11.05-8.96 20-20 20H162.35c-11.04 0-20-8.95-20-20V284.71c0-11.05 8.96-20 20-20h278.83z"
          id="prefix__b"
        />
        <Path
          d="M449.76 264.75c9.92 4.6 14.24 16.38 9.64 26.3-15.76 33.98-54.68 117.93-70.44 151.91-4.6 9.92-16.38 14.24-26.3 9.64l-205.1-95.1c-9.92-4.6-14.24-16.38-9.64-26.31 15.76-33.97 54.68-117.92 70.44-151.9 4.6-9.93 16.38-14.24 26.3-9.64l205.1 95.1z"
          id="prefix__c"
        />
        <Path
          d="M230.59 167.81c11.04 0 20 8.95 20 20v123.95c0 11.05-8.96 20-20 20h-68.24c-11.04 0-20-8.95-20-20V187.81c0-11.05 8.96-20 20-20h68.24z"
          id="prefix__d"
        />
      </Defs>
      <Use xlinkHref="#prefix__a" fill="#7a6f70" />
      <Use xlinkHref="#prefix__b" fill="#514849" />
      <Use xlinkHref="#prefix__c" fill="#514849" />
      <Use xlinkHref="#prefix__d" fill="#514849" />
    </Svg>
  )
}

export default Bimage;

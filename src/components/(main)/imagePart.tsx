import React from "react";
import Image from "next/image";
//import {RetroGrid} from "@/lib/retro";

function ImagePart() {
  return (
    <div className={`globalbg relative w-full h-[800px]`}>
      <div className="relative h-[800px] w-full overflow-hidden">
        {/* <RetroGrid /> */}
        <div className="hidden sm:block">
          <Image
            src="/andreah3.webp"
            alt="Andrea Hosking"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />
        </div>

        {/* Mobile image */}
        <div className="block sm:hidden">
          <Image
            src="/andreah1.jpg"
            alt="Andrea Hosking Mobile"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default ImagePart;

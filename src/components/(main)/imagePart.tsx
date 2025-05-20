import React from "react";
import Image from "next/image";
import styles from "./main.module.css";
import {RetroGrid} from "@/lib/retro";

function ImagePart() {
  return (
    <div className={`${styles.andreahCol} relative w-full h-[800px]`}>
      <div className="relative h-[800px] w-full overflow-hidden">
        <RetroGrid />
      </div>
      <Image
          src="/andreah3.webp"
          alt="Andrea Hosking"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-white text-9xl font-bold">ANDREA HOSKING</h1>
        <h1 className="text-amber-700 text-9xl font-bold">ANDREA HOSKING</h1>
        <h1 className="text-blue-600 text-9xl font-bold">ANDREA HOSKING</h1>
        <h1 className="text-amber-300 text-9xl font-bold">ANDREA HOSKING</h1>
        <h1 className="text-green-400 text-9xl font-bold">ANDREA HOSKING</h1>
        <h1 className="text-pink-500 text-9xl font-bold">ANDREA HOSKING</h1>
      </div> */}
    </div>
  );
}

export default ImagePart;

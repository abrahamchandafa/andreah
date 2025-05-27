import React from "react";
import { BlurFade } from "@/lib/blurfade";
import { Particles } from "@/lib/particles";

const links = [
  "https://www.youtube.com/embed/cOTKhWGAdwI?si=yKq6hWTnsrdeykxO",
  "https://www.youtube.com/embed/ExMD_tiYg8o?si=ddv2St17Uo9ysmjf",
  "https://www.youtube.com/embed/u7Y3iqu430w?si=b4vYYo3AwHbAKx23",
  "https://www.youtube.com/embed/mQKtxrtnYfA?si=jTncKmoO2QKsOICu",
  "https://www.youtube.com/embed/jeIjdV4HAjk?si=CsLn9hS0XDmbwlL8",
  "https://www.youtube.com/embed/Om_sUgtqqQ0?si=WH5_tUZsxzee8ka_",
];

function Videos() {
  return (
    <div id="WATCH"
      className={`bg-amber-100 relative min-h-screen inset-0 z-10 px-7`}
    >
      <BlurFade
        delay={0.1}
        duration={0.5}
        direction="down"
        offset={20}
        inView={true}
      >
        <div className="flex justify-center py-20">
          <h1 className="text-amber-900  text-5xl font-bold px-7 py-10">
            WATCH
          </h1>
        </div>
      </BlurFade>

      <BlurFade
        delay={0.2}
        duration={0.5}
        direction="down"
        offset={20}
        inView={true}
      >
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-9xl mx-auto">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-black overflow-hidden shadow-lg rounded-xl"
            >
              <div className="relative w-full pt-[56.25%]">
                {" "}
                {/* 16:9 aspect ratio (9 / 16 = 0.5625) */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={link}
                  title={`YouTube video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
      <Particles
        className="absolute top-0 left-0 right-0 bottom-0 z-0 w-full min-h-full"
        quantity={200}
        ease={80}
        color="#000000"
        refresh
      />
    </div>
  );
}

export default Videos;

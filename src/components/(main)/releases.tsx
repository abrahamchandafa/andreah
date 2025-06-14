import React from "react";
import { BlurFade } from "@/lib/blurfade";
import { Particles } from "@/lib/particles";

const links = [
  "https://open.spotify.com/embed/album/2XENRgDglMhvTZJUlcCMAT?utm_source=generator ",
  "https://open.spotify.com/embed/album/5yfzRHjaOcMroaasGM1crD?utm_source=generator ",
  "https://open.spotify.com/embed/album/0MS1hYaCzPxwghOQZ3v4ug?utm_source=generator ",
  "https://open.spotify.com/embed/album/77LtO5un17GO0kjuGjg3ym?utm_source=generator ",
  "https://open.spotify.com/embed/album/3v8XHKmQW9f1S61TCibfwr?utm_source=generator ",
  "https://open.spotify.com/embed/album/5IqSMI36IedVRO7aust1xq?utm_source=generator ",
  "https://open.spotify.com/embed/album/1sxuXbtdEKHuj7pNUJBCa6?utm_source=generator ",
  "https://open.spotify.com/embed/album/0pmxAULs7DUGoa3NPvuHa6?utm_source=generator ",
  "https://open.spotify.com/embed/album/1RdUMPx8rooYW1ShwoSxXD?utm_source=generator ",
  "https://open.spotify.com/embed/album/1TaLRj2r7rc0eK02Porvjw?utm_source=generator ",
];

function Releases() {
  return (
    <div
      className={`globalbg bg-red-950 relative min-h-screen inset-0 z-10 px-7 mb-0 pb-10`}
    >
      <BlurFade
        delay={0.1}
        duration={0.2}
        direction="down"
        offset={20}
        inView={true}
      >
        <div className="flex justify-center py-20">
          <h1 className="text-white  text-5xl font-bold px-7 py-10">
            POPULAR RELEASES
          </h1>
        </div>
      </BlurFade>

      <BlurFade
        delay={0.2}
        duration={0.2}
        direction="down"
        offset={20}
        inView={true}
      >
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {links.map((link, index) => (
            <div key={index} className="">
              <div className="">
                <iframe
                  style={{"borderRadius":"12px"}}
                  src={link}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
      <Particles
        className="absolute top-0 left-0 right-0 bottom-0 z-0 w-full min-h-full"
        quantity={200}
        ease={80}
        color="#ffffff"
        refresh
      />
    </div>
  );
}

export default Releases;

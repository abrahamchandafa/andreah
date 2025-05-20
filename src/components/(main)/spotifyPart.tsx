import React from "react";
import styles from "./main.module.css";
import { BlurFade } from "@/lib/blurfade";
import { BorderBeam } from "@/lib/borderBeam";

function Spotify() {
  return (
    <div
      className={`${styles.andreahCol} inset-0 flex flex-col items-center justify-center z-10 px-7`}
    >
      <BlurFade
        delay={0.5}
        duration={1}
        direction="right"
        offset={300}
        inView={true}
      >
        <h1 className="text-white text-5xl font-bold px-7 py-20">
          TOP SPOTIFY TRACKS
        </h1>
      </BlurFade>
      <BlurFade
        delay={1}
        duration={1}
        direction="left"
        offset={300}
        inView={true}
      >
        <div>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/02yssJvjMJdJ3nueVhig4j?utm_source=generator&theme=0"
            width="1500px"
            height="752"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <BorderBeam duration={12} size={400} />
        </div>
      </BlurFade>
    </div>
  );
}

export default Spotify;

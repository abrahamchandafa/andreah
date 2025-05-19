import React from "react";
import styles from "./main.module.css"

function Spotify() {
  return (
    <div className={`${styles.andreahCol} inset-0 flex flex-col items-center justify-center z-10 px-7`}>
        <h1 className="text-white text-5xl font-bold px-7 py-20">TOP SPOTIFY TRACKS</h1>
      <iframe
        style={{borderRadius:"12px"}}
        src="https://open.spotify.com/embed/artist/02yssJvjMJdJ3nueVhig4j?utm_source=generator&theme=0"
        width="100%"
        height="552"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Spotify;

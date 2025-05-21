"use client"
import Header from "@/components/header/header";
import ImagePart from "@/components/(main)/imagePart";
import Spotify from "@/components/(main)/spotifyPart";
import Releases from "@/components/(main)/releases";
import Videos from "@/components/(main)/videos";
import Footer2 from "@/components/footer/footer2";
import { ScrollProgress } from "@/lib/scrollProgress";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";

export default function Home() {
  const isMobile = useIsMobile();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <ImagePart />
        <Releases />
        {hasMounted && !isMobile && <Spotify />} {/* Only render on desktop */}
        <Videos />
      </main>

      <ScrollProgress className="top-[100px]" />
      <Footer2 />
    </div>
  );
}

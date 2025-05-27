"use client";
import Header from "@/components/header/header";
import ImagePart from "@/components/(main)/imagePart";
//import Spotify from "@/components/(main)/spotifyPart";
import Videos from "@/components/(main)/videos";
import Footer2 from "@/components/footer/footer2";
import { ScrollProgress } from "@/lib/scrollProgress";
//import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/loader";
import Releases from "@/components/(main)/releases";

export default function Home() {
  //const isMobile = useIsMobile();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading)
    return <Loader />

  return (
    <div>
      <Header />
      <main>
        <ImagePart />
        <Videos />
        <Releases />
      </main>

      <ScrollProgress className="top-[150px]" />
      <Footer2 />
    </div>
  );
}

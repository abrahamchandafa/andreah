
import Header from "@/components/header/header";
import ImagePart from "@/components/(main)/imagePart";
import Spotify from "@/components/(main)/spotifyPart";
import Releases from "@/components/(main)/releases";
import Videos from "@/components/(main)/videos";
import Footer2 from "@/components/footer/footer2";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <ImagePart />
        <Releases />
        <Spotify />
        <Videos />
      </main>
      <Footer2 />
    </div>
  );
}

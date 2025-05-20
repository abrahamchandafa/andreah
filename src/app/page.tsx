
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ImagePart from "@/components/(main)/imagePart";
import Spotify from "@/components/(main)/spotifyPart";
import Releases from "@/components/(main)/releases";
import Videos from "@/components/(main)/videos";

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
      <Footer />
    </div>
  );
}

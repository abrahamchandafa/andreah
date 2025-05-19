import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ImagePart from "@/components/(main)/imagePart";
import Spotify from "@/components/(main)/spotifyPart";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <ImagePart />
        <Spotify />
      </main>
      <Footer />
    </div>
  );
}

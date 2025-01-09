import { client } from "@/app/lib/sanity";
import { getVideoUrl } from "@/app/lib/sanityImage";  // Import the getVideoUrl function
import "./Hero.css";

async function getData() {
  const query = `*[_type == "heroVideo"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Hero = async () => {
  const data = await getData();

  return (
    <section className="hero">
      <video
        className="hero__video"
        src={getVideoUrl(data.video)}  // Use getVideoUrl to fetch the video URL
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero__content">
        <h1 className="hero__title">
          New Mandilas Market: Redefining Style with Joe and Joe.
        </h1>
        <button className="hero__btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;

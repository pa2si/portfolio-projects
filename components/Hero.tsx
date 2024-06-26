import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-hero hero">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there...</h1>
          <AnimatedText text="...welcome to my world of coding!" />
          <Link href="/#about" className="btn btn-primary mt-5 animate-pulse">
            <div className="">about me</div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;

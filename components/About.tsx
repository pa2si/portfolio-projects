import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { MotionDiv } from "@/lib/MotionComponents";

const About = () => {
  const slideIn = {
    initial: {
      opacity: 0.3,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section
      className="base-100 -mb-12 flex min-h-[35rem] items-center justify-center pt-12"
      id="about"
    >
      <MotionDiv
        className="bg mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-lg shadow-xl md:grid-cols-2"
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Image container */}
        <div className="relative h-[200px] w-full sm:h-[400px] md:h-auto">
          <Image
            src="/profile.jpg"
            alt="Profile image of Pascal Morgan"
            width={500}
            height={500}
            priority
            className="h-full w-full rounded-l-lg object-cover"
          />
        </div>

        {/* Text container */}
        <div className="space-y-6 p-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary">
              About Pascal Morgan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hi, I&apos;m Pascal Morgan, a Berlin / Germany based Full Stack
              Developer passionate about using newest technology regarding
              React.js and especially Next.js. Ready to bring my talent into
              your company!
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="text-3xl text-primary">
              <FaQuoteRight />
            </div>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default About;

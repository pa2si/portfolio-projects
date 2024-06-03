import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import { MotionDiv } from '@/lib/MotionComponents';

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
      className="min-h-[35rem] flex items-center justify-center pt-12 base-100 -mb-12"
      id="about"
    >
      <MotionDiv
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg shadow-xl rounded-lg overflow-hidden"
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Image container */}
        <div className="w-full h-[200px] sm:h-[400px] md:h-auto relative">
          <Image
            src="/profile.jpg"
            alt="Profile image of Pascal Morgan"
            width={500}
            height={500}
            priority
            className="rounded-l-lg object-cover w-full h-full"
          />
        </div>

        {/* Text container */}
        <div className="p-8 space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary">
              About Pascal Morgan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hi, I&apos;m Pascal Morgan, a Berlin / Germany based Fullstack
              Developer passionate about creating unique websites. Ready to
              bring your vision to life!
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

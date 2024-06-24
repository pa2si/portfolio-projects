import Image from "next/image";
import udemyCourseData from "@/lib/udemyCourseData";
import type { UdemyCourseType } from "@/lib/types";
import { staggeredAnimation } from "@/utils/animations";
import { MotionLi } from "@/lib/MotionComponents";

const UdemyCourseCards = () => {
  return (
    <ul className="flex h-72 flex-col gap-2 overflow-y-scroll py-2 md:h-fit">
      {udemyCourseData.map((course: UdemyCourseType, index: number) => (
        <MotionLi
          className="card card-side h-24 w-svw bg-base-100 shadow-xl md:h-28 md:w-full"
          key={index}
          variants={staggeredAnimation(0.15)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          custom={index}
          // style={{ height: "6.7rem" }}
        >
          <figure>
            <Image
              src={course.imgUrl}
              alt={course.title}
              width={100}
              height={100}
              className="rounded-full"
            />
          </figure>
          <div className="card-body -mt-6 md:-mt-0">
            <h2 className="card-title text-sm md:text-lg">{course.title}</h2>
            <div className="flex">
              <p>by {course.teacher}</p>
              <div className="card-actions justify-end">
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary btn-sm">Visit</button>
                </a>
              </div>
            </div>
          </div>
        </MotionLi>
      ))}
    </ul>
  );
};
export default UdemyCourseCards;

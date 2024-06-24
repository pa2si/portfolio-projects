import { SiUdemy } from "react-icons/si";
import udemyCourseData from "@/lib/udemyCourseData";
import { MotionLi } from "@/lib/MotionComponents";
import Image from "next/image";
import { staggeredAnimation } from "@/utils/animations";
import { UdemyCourseType } from "@/lib/types";

const UdemyCoursesModal = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7">
        <SiUdemy />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal overflow-scroll" role="dialog">
        <div className="modal-box absolute">
          <ul className="relative flex flex-col gap-2 overflow-scroll py-2">
            {udemyCourseData.map((course: UdemyCourseType, index: number) => (
              <MotionLi
                className="card card-side w-svw bg-base-100 shadow-xl md:h-28 md:w-full"
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
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </figure>
                <div className="card-body -mt-6 md:-mt-0">
                  <h2 className="card-title text-sm md:text-lg">
                    {course.title}
                  </h2>
                  <div className="flex">
                    <p>by {course.teacher}</p>
                    <div className="card-actions justify-end">
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary btn-sm">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </MotionLi>
            ))}
          </ul>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};
export default UdemyCoursesModal;

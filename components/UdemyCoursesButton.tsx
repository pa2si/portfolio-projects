import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiUdemy } from "react-icons/si";
import UdemyCourseCards from "./UdemyCourseCards";

const UdemyCoursesButton = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="swap swap-rotate mt-1 text-xl text-primary transition-all duration-200 ease-in-out hover:text-primary-content">
            <SiUdemy />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-base-100">
          <DropdownMenuLabel className="text-lg text-secondary">
            Completed Udemy courses:
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="bg-base-100 focus:bg-base-100">
            <UdemyCourseCards />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default UdemyCoursesButton;

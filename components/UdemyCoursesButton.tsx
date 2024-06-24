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
        <DropdownMenuContent>
          <DropdownMenuLabel>Completed Udemy courses:</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <UdemyCourseCards />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default UdemyCoursesButton;

import Image from "next/image";
import { StackType } from "@/lib/types";

const StackPreview = ({
  stack,
  showCaption,
}: {
  stack: StackType;
  showCaption: boolean;
}) => {
  const imageSize = showCaption
    ? { width: 25, height: 25 }
    : { width: 34, height: 34 };
  return (
    <figure key={stack.name} className="flex items-center">
      <i>
        {/* stack image*/}
        <Image
          src={stack.image}
          alt={stack.name}
          width={imageSize.width}
          height={imageSize.height}
          style={{
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`,
          }}
        />
      </i>
      {/* stack name  */}
      {showCaption && <figcaption className="ml-1">{stack.name}</figcaption>}
    </figure>
  );
};
export default StackPreview;

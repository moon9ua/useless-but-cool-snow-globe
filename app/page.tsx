import Canvas from "@/components/Canvas";
import Image from "next/image";
import crystal from "../public/images/snow-ball-with-snow-and-tree-2.png";

export default function Page() {
  return (
    <>
      <Image
        alt="crystal"
        src={crystal}
        width={380}
        height={470}
        className="crystal"
      />

      <Canvas />
    </>
  );
}

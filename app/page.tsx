import Canvas from "@/components/Canvas";
import Image from "next/image";
import crystal from "../public/png/snow-ball.png";

export default function Page() {
  return (
    <>
      <Image
        alt="crystal"
        src={crystal}
        width={380}
        height={470}
        id="crystal"
      />

      <Canvas />
    </>
  );
}

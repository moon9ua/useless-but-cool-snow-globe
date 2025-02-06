import Canvas from "@/components/Canvas";
import Image from "next/image";
import crystalBallImg from "../public/images/crystal-ball-with-snow-and-tree-2.png";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Image
        alt="crystal-ball"
        src={crystalBallImg}
        width={380}
        height={470}
        className={styles["crystal-ball"]}
      />

      <Canvas />
    </>
  );
}

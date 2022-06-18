import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { memo, useEffect } from "react";

interface VerticalTansitionVideoInfoType {
  imagePosition: string;
  moveVidFrom: any;
  moveContextFrom: any;
  contentInfo: {
    title: string;
    content: string;
    videoPath: string;
  };
  colorType: string;
}

const VerticalTansitionVideoInfo = ({ imagePosition, moveVidFrom, moveContextFrom, contentInfo, colorType }: VerticalTansitionVideoInfoType) => {
  const handleVideoMouseEnter = (e: any) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
    controlText.start("open");
  };

  const handleVideoMouseLeave = async (e: any) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
    await controlText.start("close");
    await controlText.start("close2");
  };
  const controlVid = useAnimation();
  const controlText = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controlVid.start("vidVisible");
    } else {
      // controlVid.start("vidHidden");
    }
  }, [controlVid, inView]);

  return (
    <motion.div ref={ref} animate={controlVid} initial="vidHidden" variants={moveVidFrom} className="flex flex-col h-full drop-shadow-lg">
      <div>
        <div className={`text-[1.8vw] font-bold  w-[100%] ${colorType == "blue" ? "bg-[#EAF2FA]" : "bg-[#EEF7E9]"} pt-[5vh] px-[2vw]  `}>{contentInfo.title}</div>
        <div className={` ${colorType == "blue" ? "bg-[#EAF2FA]" : "bg-[#EEF7E9]"} px-[2vw] pt-[2vh] pb-[3vh] z-30  `}>
          <video
            src={contentInfo.videoPath}
            loop
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
            className="w-[100%] transition-[width] delay-150 object-cover shadow-xl  rounded-lg  z-30"
          />
        </div>
      </div>

      <motion.div
        animate={controlText}
        initial="initial"
        variants={moveContextFrom}
        className={`${colorType == "blue" ? "bg-[#EAF2FA]" : "bg-[#EEF7E9]"} -z-50 `}
        onMouseEnter={() => controlText.start("open")}
        onMouseLeave={async () => {
          await controlText.start("close");
          await controlText.start("close2");
        }}>
        <div className="p-[2vw] z-0 text-[1vw]">{contentInfo.content}</div>
      </motion.div>
    </motion.div>
  );
};

export default memo(VerticalTansitionVideoInfo);

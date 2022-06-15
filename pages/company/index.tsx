import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import VideoOnHover from "../../components/CompanyComponents/VideoOnHover";
import Member from "../../components/CompanyComponents/Member";
import History from "../../components/CompanyComponents/History";
import { philosophy } from "../../functions/philosophy";
import companyIntro from "@/images/companyIntro.jpg";
import { useInView } from "react-intersection-observer";

const TansitionVidLToR = {
  visible: { z: 30, opacity: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, x: -1000 },
};

const TansitionVidRToL = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, x: 1000 },
};

const Company: React.FC = () => {
  const controlText = useAnimation();
  const controlVid = useAnimation();
  const [ref, inView] = useInView();
  const [width, setWidth] = useState(0);
  const carousel = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (carousel && carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (inView) {
      controlText.start("visible");
      controlVid.start("visible");
    } else {
    }
  }, [controlVid, controlText, inView]);

  return (
    <div className="m-4 mx-16 ">
      <div className="my-4 mb-20">
        <div className=" mb-20">
          <div className="relative">
            <motion.div ref={ref} className="h-[80vh]" animate={controlVid} initial="hidden" variants={TansitionVidLToR}>
              <img src={companyIntro.src} className="object-cover h-full w-full rounded-lg shadow-lg"></img>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controlText}
              initial="hidden"
              variants={TansitionVidRToL}
              className="absolute inset-0 flex justify-center items-center z-10 text-9xl text-zinc-600">
              <div>Company</div>
            </motion.div>
          </div>

          {/* <SlideShow /> */}
        </div>
        <div className="text-5xl font-semibold  mb-5">Philosophy</div>
        <div className="flex">
          <VideoOnHover videoPath="./video/philosophy1.mp4" isMiddle={false} type={philosophy.mission} />
          <VideoOnHover videoPath="./video/philosophy2.mp4" isMiddle={true} type={philosophy.vision} />
          <VideoOnHover videoPath="./video/philosophy3.mp4" isMiddle={false} type={philosophy.coreValues} />
        </div>
      </div>
      <div className="mb-20">
        <div className="text-5xl font-semibold mb-5">Members</div>
        {/* <div className="flex overflow-x-auto space-x-7 w-[100%] border-4 py-4 no-scrollbar"> */}
        <motion.div ref={carousel} className="cursor-grab  overflow-x-auto no-scrollbar pl-18  bg-white">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex">
            <Member name="min" />
            <Member name="jonghoh" />
            <Member name="prof" />
            <Member name="minhyeok" />
            <Member name="kyunghoh" />
            <Member name="cherin" />
          </motion.div>
        </motion.div>

        {/* </div> */}
      </div>

      <div className="my-4">
        <div className="text-5xl font-semibold mb-5">History</div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          <History year={2022} />
          <History year={2021} />
        </div>
      </div>
    </div>
  );
};

export default Company;

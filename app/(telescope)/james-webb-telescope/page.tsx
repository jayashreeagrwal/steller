import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
// import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import videoUrl from '../public/media.mp4';

import '@/public/telescope.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

const Telescope = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       gsap.to(videoRef.current, {
//         duration: 1,
//         opacity: 1,
//         ease: "power2.inOut",
//       });
//     }
//   }, []);

  return (
    <div>
      <div className="video-container">
        {/* <video
        //   ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          loop
          className="video-bg"
        /> */}
        <div className="bg-overlay"></div>
        <div className="home-text flex w-full flex-wrap items-center justify-center">
          <h1>Spinning the Webb:<br></br>A look into the James Webb Space Telescope</h1>
          <div>
            <Button variant="ghost" size="lg" className="mr-3">
              James Webb
            </Button>
            <Button variant="ghost" size="lg" className="mr-3">
              Telescope
            </Button>
            <Button variant="ghost" size="lg" className="mr-3">
              Structure & Design
            </Button>
            <Button variant="ghost" size="lg" className="center">
              Discoveries
            </Button>
          </div>
        </div>
      </div>
      <div>
        About James Webb
      </div>
    </div>
  );
};

export default Telescope;
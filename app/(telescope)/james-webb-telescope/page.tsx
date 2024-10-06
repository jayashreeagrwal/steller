import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { Button } from "@/components/ui/button";
import '@/public/telescope.css';
import Link  from 'next/link';
import Image  from 'next/image';



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

const Telescope = () => {
  return (
    <div>
      <div className="video-container">
        <video
          src={'/media.mp4'}
          autoPlay
          muted
          loop
          className="video-bg"
        />
        <div className="bg-overlay"></div>
        <div className="home-text flex flex-col items-center justify-center h-screen">
          <h1 style={{
            textAlign: 'center',
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            Spinning the Webb:<br></br>A look into the James Webb Space Telescope
          </h1>
          <div style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '20px' }}>
            <p style={{
              fontSize: '18px',
            }}>
              The James Webb Space Telescope is a space observatory that will allow us to study the universe in unprecedented detail. With its advanced technology and capabilities, it will enable us to explore the cosmos in ways that were previously impossible.
            </p>
          </div>
          <div className="flex gap-3">
            <Button size="lg">
            <Link href="/james-webb-telescope">James Webb</Link>
            </Button>
            <Button variant="outline" size="lg">
              Telescope
            </Button>
            <Button variant="secondary" size="lg">
              Structure & Design
            </Button>
            <Button variant="ghost" size="lg">
              Discoveries
            </Button>
          </div>
        </div>
      </div>


      <div>
        
      </div>


    </div>
  );
};

export default Telescope;
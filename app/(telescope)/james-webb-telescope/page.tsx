import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { Button } from "@/components/ui/button";
// import '@/public/telescope.css';
import Link  from 'next/link';
import Image  from 'next/image';
import { Structure } from '@/components/structure-design';

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

      <div className="image-container h-screen flex items-center justify-center">
        <Image
          src="/jameswebb.png"
          fill={false}
          layout="intrinsic"
          width={1000}
          height={300}
          alt="About James Webb"
          style={{
            maxWidth: '100%',
            margin: '40px auto',
          }}
        />
      </div>
      <div className="image-container h-screen flex items-center justify-center">
  <Carousel className="w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
    <CarouselContent className="-ml-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image
                  src={`/image${index + 1}.jpg`}
                  alt={`Image ${index + 1}`}
                  width={400}
                  height={400}
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  <div className="absolute bottom-0 left-0 w-full flex justify-center z-10">
    <Button variant="ghost" size="lg"><Structure/></Button>
  </div>
</div>
    </div>
  );
};

export default Telescope;
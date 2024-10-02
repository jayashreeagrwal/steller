'use client';

import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Game from "./_components/game";

export default function LandingPage() {
  return (
    <div className="flex min-h-full flex-col ">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6 pb-2 text-center md:justify-start">
        <Heading />
        <Game />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}


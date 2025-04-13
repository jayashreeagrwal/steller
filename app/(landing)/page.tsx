'use client';

import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
// import Game from "./_components/game";

export default function LandingPage() {
  return (
    // <div className="w-full" style={{ backgroundImage: "url(/image.png)" }}>
    <div className="flex flex-col w-full" >
        <Heading />
        <Heroes />
        <Footer />
    </div>
    // </div>
  );
}


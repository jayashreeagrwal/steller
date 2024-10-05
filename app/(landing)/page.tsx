'use client';

import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Game from "./_components/game";

export default function LandingPage() {
  return (
    // <div className="w-full" style={{ backgroundImage: "url(/image.png)" }}>
    <div className="flex flex-col w-full" >
      {/* <div className="flex flex-col items-center gap-y-4 px-6 pb-2 text-center"> */}
        <Heading />
        {/* <h1 className="py-3 mt-4" style={{ fontSize: "24px" }}>Today, I'd like to go from
        <span style={{color:'#de89a1'}}> Star 1</span> to <span style={{color:'#97d6cf'}}> Star 2</span>
          </h1>
        <Game /> */}
        {/* </div> */}
        <Heroes />
      <Footer />
    </div>
    // </div>
  );
}


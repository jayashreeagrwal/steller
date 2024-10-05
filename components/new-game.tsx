

import React, { useState, useEffect } from 'react';
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
// import * as ReactDOM from 'react-dom';

const Reload = () => {

  const [data, setdata] = useState({
      constID: "",
  });

  const handleNewGame = () => {
    fetch('https://vercelsteller.vercel.app/newGame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ constID: "Cassiopeia" })
    })
    
    .then(response => 
      response.json()
      .then(
        data => {
          setdata(
            {
              constID: data.constID
            }
          )
        }
      )
    )
  };

  return (
    <div>
      <Button onClick={handleNewGame} variant="ghost" size="icon">
        <RefreshCcw size={30} />
      </Button>
      <h1>Data:</h1>
      {/* <pre>
        {data.constID}
      </pre> */}
    </div>
  );
};

export default Reload;
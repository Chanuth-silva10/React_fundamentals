//Lok at this
import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);// resize event
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  },[]);// [], cleanup function eka call wene. return eka natuwa usereffect eka run wene eka pari

  
  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;

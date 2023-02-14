import React, { useEffect, useState } from "react";
import Contador from "./second.jsx";

const Home = () => {
  let timer;

  const [miliSeconds, setMiliSeconds] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    timer = setInterval(() => {
      setMiliSeconds(prevCount => prevCount + 10);
      if (miliSeconds >= 990) {
        setSecond(prevCount => prevCount + 1);
        setMiliSeconds(0);
      }
      if (second >= 60) {
        setMinute(prevCount => prevCount + 1);
        setSecond(0);
      }
    }, 10);
    return () => clearInterval(timer);
  }, [miliSeconds]);

  return (
    <div>
      <Contador miliSeconds={miliSeconds} second={second} minute={minute} />
    </div>
  );
};

export default Home;


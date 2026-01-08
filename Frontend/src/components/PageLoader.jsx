import React, { useEffect, useRef, useState } from "react";

const PageLoader = ({ onFinish }) => {
  const carouselRef = useRef(null);

  const [rotation, setRotation] = useState({ x: 20, y: 0 });
  const [count, setCount] = useState(1);

const letters = [
  "C","O","D","E","•",
  "D","E","S","I","G","N","•",
  "A","N","I","M","A","T","E", "•",
];



  /* 🔒 Disable scroll while loader is active */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /* 🔁 Fixed smooth rotation */
  useEffect(() => {
    let rafId;

    const rotate = () => {
      setRotation((prev) => ({
        x: 20,            // fixed tilt
        y: prev.y + 0.4,  // rotation speed
      }));

      rafId = requestAnimationFrame(rotate);
    };

    rotate();

    return () => cancelAnimationFrame(rafId);
  }, []);

  /* 🔢 Percentage counter (slows near 100) */
  useEffect(() => {
    if (count >= 100) {
      setTimeout(() => onFinish?.(), 500);
      return;
    }

    const speed = count < 95 ? 30 : 150;

    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [count, onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-red-500">

      {/* 3D Carousel */}
      <div className="relative w-[240px] h-[160px] perspective mb-10">
        <div
          ref={carouselRef}
          className="absolute w-full h-full transform-style-preserve-3d"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
        >
          {letters.map((letter, idx) => (
            <div
              key={idx}
              className="absolute flex justify-center items-center font-display font-bold text-white uppercase tracking-tighter"
              style={{
                width: "200px",
                height: "400px",
                fontSize: "7vw",
                transform: `rotateY(${idx * (360 / letters.length)}deg) translateZ(18vw)`,
                transformStyle: "preserve-3d",
                // backfaceVisibility: "hidden",
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Percentage Counter */}
      <div className="text-white text-2xl tracking-widest font-display font-bold absolute bottom-16">
        {count}%
      </div>
    </div>
  );
};

export default PageLoader;

import React, { useEffect, useRef, useState } from "react";

export default function AnimatedSprite({ src, frameWidth, frameHeight, frames, fps = 8, style = {} }) {
  const [frame, setFrame] = useState(0);
  const spriteRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % frames);
    }, 1000 / fps);
    return () => clearInterval(interval);
  }, [frames, fps]);

  return (
    <div
      ref={spriteRef}
      style={{
        width: frameWidth,
        height: frameHeight,
        backgroundImage: `url(${src})`,
        backgroundPosition: `-${frame * frameWidth}px 0px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        ...style,
      }}
    />
  );
}

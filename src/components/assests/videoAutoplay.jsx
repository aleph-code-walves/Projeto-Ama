import React, { useEffect, useRef } from 'react';

export default function VideoAutoPlay({ src, className = '' }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -15% 0px',
      }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      autoPlay
      playsInline
      loop
      controls={false}
      preload="metadata"
      className={`${className} object-cover w-full rotate`}
    />
  );
}

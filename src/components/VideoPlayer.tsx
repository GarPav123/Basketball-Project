import React from 'react';

const isClient = typeof window !== 'undefined';

const VideoPlayer: React.FC = () => {
  return (
    <div>
      <video width={640} height={360} autoPlay={true} loop muted playsInline>
        <source src="/images/introvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

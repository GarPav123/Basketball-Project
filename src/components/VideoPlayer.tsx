const isBrowser = typeof window !== 'undefined';
const VideoPlayer: React.FC = () => {
    return (
      <div>
        
        <video width="640" height="360" autoPlay={isBrowser} loop muted playsInline controlsList="nodownload">
          <source src="/images/brainvid.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;
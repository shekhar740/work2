
"use client";

const WavyBackground: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#2B87FF" // Change this color to match your theme
          d="M0,192L30,202.7C60,213,120,235,180,245.3C240,256,300,256,360,245.3C420,235,480,213,540,202.7C600,192,660,192,720,192C780,192,840,192,900,202.7C960,213,1020,235,1080,245.3C1140,256,1200,256,1260,245.3C1320,235,1380,213,1410,202.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">Welcome to Our Site</h1>
        <p className="mt-4 text-lg text-white">Experience the beauty of our services.</p>
      </div>
    </div>
  );
};

export default WavyBackground;
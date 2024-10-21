'use client'
// useIsMobile.js
import { useEffect, useState } from 'react';

// Custom hook to check if the view is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Define mobile width threshold

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update state based on window width
    };

    window.addEventListener('resize', handleResize); // Add event listener for resize

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile; // Return the current mobile state
};

export default useIsMobile;
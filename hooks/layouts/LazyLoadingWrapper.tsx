'use client'
import React, { useState, useEffect, useRef, Suspense, ReactNode } from "react";

// Lazy loading wrapper using Intersection Observer and Suspense
interface LazyLoadWithSuspenseProps {
  children: ReactNode; // Child component to be lazy-loaded
  fallback?: ReactNode; // Fallback while the component is loading
}

export const LazyLoadWithSuspense: React.FC<LazyLoadWithSuspenseProps> = ({ children, fallback = <div>Loading...</div> }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return; // Ensure the element is available

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log("IntersectionObserver entry:", entry.isIntersecting); // Log visibility
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the component is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <div ref={elementRef}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight: "100px" }}>{fallback}</div> // Ensure the div has height before the component is visible
      )}
    </div>
  );
};

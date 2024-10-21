"use client";
import { LazyLoadWithSuspense } from "@/hooks/layouts/LazyLoadingWrapper";
import useIsMobile from "@/hooks/mobile-view";
import React from "react";

// Lazy-loaded components
const HeroSection = React.lazy(() => import("./_components/Hero2"));
const Choose = React.lazy(() =>
  import("./_components/Choose").then((module) => ({ default: module.Choose }))
);
const Services = React.lazy(() =>
  import("./_components/Services").then((module) => ({
    default: module.Services,
  }))
);
const Pricing = React.lazy(() =>
  import("./_components/Pricing").then((module) => ({
    default: module.Pricing,
  }))
);
const TestiMonials = React.lazy(() =>
  import("./_components/Testimonial").then((module) => ({
    default: module.TestiMonials,
  }))
);
const MobileFeature = React.lazy(()=>import("./_components/MobileFeature").then((module)=>({
  default:module.MobileFeatures
})))
const Footer = React.lazy(() =>
  import("./_components/Footer").then((module) => ({ default: module.Footer }))
);

const Features = React.lazy(() =>
  import("./_components/Features").then((module) => ({
    default: module.Features,
  }))
);

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-10 w-full">
        <LazyLoadWithSuspense fallback={<div>Loading component...</div>}>
          <HeroSection />
        </LazyLoadWithSuspense>

        <LazyLoadWithSuspense fallback={<div>Loading component...</div>}>
          <Choose />
        </LazyLoadWithSuspense>
        {isMobile ? (
          <LazyLoadWithSuspense fallback={<div>Loading component...</div>}>
          <MobileFeature />
        </LazyLoadWithSuspense>
        ) : (
          <LazyLoadWithSuspense fallback={<div>Loading component...</div>}>
            <Features />
          </LazyLoadWithSuspense>
        )}

        <LazyLoadWithSuspense fallback={<div>Loading component...</div>}>
          <Services />
        </LazyLoadWithSuspense>

        <LazyLoadWithSuspense fallback={<div>Loading component...</div>}>
          <Pricing />
        </LazyLoadWithSuspense>

        <LazyLoadWithSuspense fallback={<div>Loading component...</div>}>
          <TestiMonials />
        </LazyLoadWithSuspense>

        <LazyLoadWithSuspense fallback={<div>Loading component...</div>}>
          <Footer />
        </LazyLoadWithSuspense>
      </div>
    </section>
  );
};

export default Home;

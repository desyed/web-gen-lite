import HeroSection from "@/views/pages/home/components/hero-section";
import ServiceSection from "@/views/pages/home/components/service-section";
import NewslaterSection from "@/views/pages/home/components/newslater-section";
import { LandingLayout } from "@/views/layouts/landing.layout";

export default function HomePage() {
  return (
    <LandingLayout title="Home">
      <HeroSection/>
      <ServiceSection/>
      <NewslaterSection/>
    </LandingLayout>
  );
};

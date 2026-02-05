import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import SocialProof from "@/components/home/SocialProof";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <FeaturedProjects />
      <SocialProof />
      <CTASection />
    </>
  );
}

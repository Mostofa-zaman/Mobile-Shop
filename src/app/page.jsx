import Experts from "@/components/home/Experts";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/Hero";
import LatestPosts from "@/components/home/LatestPosts";
import Repair from "@/components/home/Repair";
import Testtmonial  from "@/components/home/Testimonial";



export default function Home() {
  return (
  <>
 <HeroSection />
 <Experts/>
 <Repair/>
 <Testtmonial/>
 <FaqSection/>
 <LatestPosts/>
  </>
  );
}

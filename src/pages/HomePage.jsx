import Seo from "../components/ui/Seo";
import { homeHealthCareJsonLd } from "../data/seo";
import CtaBand from "../components/ui/CtaBand";
import HeroHome from "../components/sections/HeroHome";
import AboutTeaser from "../components/sections/AboutTeaser";
import ServicesGrid from "../components/sections/ServicesGrid";
import StatsBar from "../components/sections/StatsBar";
import ValuesGrid from "../components/sections/ValuesGrid";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ForFamiliesCta from "../components/sections/ForFamiliesCta";
import ProcessSteps from "../components/sections/ProcessSteps";
import TestimonialCarousel from "../components/sections/TestimonialCarousel";
import AreasServed from "../components/sections/AreasServed";
import ReviewsSection from "../components/sections/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <Seo
        description="Cegron Care provides adult homecare and children and young people support across Aberdeen City and Aberdeenshire. Person-centred care, planned around you."
        path="/"
        jsonLd={homeHealthCareJsonLd}
      />
      <HeroHome />
      <AboutTeaser />
      <ServicesGrid />
      <StatsBar />
      <ValuesGrid />
      <WhyChooseUs />
      <ForFamiliesCta />
      <ProcessSteps />
      <TestimonialCarousel />
      <AreasServed />
      <ReviewsSection />
      <CtaBand />
    </>
  );
}

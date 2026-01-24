import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { NewsSection } from "@/components/home/NewsSection";
import { EventsSection } from "@/components/home/EventsSection";
import { AboutPreview } from "@/components/home/AboutPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickLinksSection />
      <AboutPreview />
      <div className="grid gap-0 lg:grid-cols-2">
        <NewsSection />
        <EventsSection />
      </div>
    </Layout>
  );
};

export default Index;

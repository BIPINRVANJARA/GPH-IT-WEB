import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { NewsSection } from "@/components/home/NewsSection";
import { EventsSection } from "@/components/home/EventsSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Welcome to the Department of Information Technology at Government Polytechnic Himatnagar. Empowering students with technical excellence."
      />
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

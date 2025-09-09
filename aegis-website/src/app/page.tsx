import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import MarketOpportunitySection from '@/components/MarketOpportunitySection';
import DefensibleMoatSection from '@/components/DefensibleMoatSection';
import TeamSection from '@/components/TeamSection';
import InvestmentOpportunitySection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background]">
      <HeroSection />
      <SolutionSection />
      <MarketOpportunitySection />
      <DefensibleMoatSection />
      <TeamSection />
      <InvestmentOpportunitySection />
    </div>
  );
}
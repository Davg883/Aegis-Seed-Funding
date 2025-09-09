export default function TeamSection() {
  const TeamMemberCard = ({ name, title, role, description, logo, image }: { 
    name: string; 
    title: string; 
    role: string; 
    description: string; 
    logo?: string;
    image: string;
  }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
      {/* Actual team member headshots */}
      <div className="w-32 h-32 mx-auto mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="text-2xl font-serif font-semibold text-[--primary] mb-1">{name}</h3>
      <p className="text-lg text-[--accent] mb-2">{title}</p>
      <p className="text-sm text-[--foreground] italic mb-4">{role}</p>
      <p className="text-[--foreground] mb-4">{description}</p>
      {logo && (
        <div className="flex justify-center mt-4">
          <div className="bg-gray-100 px-4 py-2 rounded">
            <span className="text-gray-600 text-sm">{logo}</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[--primary] mb-6">
            A Venture-Ready Team Built for This Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <TeamMemberCard 
            name="David Grannum"
            title="Founder & CEO"
            role="The Operator-Visionary"
            description="Tri-sector expert with deep operational experience (Solent Fuels), corporate strategy (Texaco), and AI architectural vision."
            logo="Texaco"
            image="/Images/DG Head shot.png"
          />
          <TeamMemberCard 
            name="Sai Sunkara"
            title="Co-Founder & CTO"
            role="The AI Architect"
            description="World-class AI systems builder (ex-Cisco) with a proven blueprint for our core agentic AI and constraint optimization technology."
            logo="Cisco"
            image="/Images/SS Headshot.png"
          />
          <TeamMemberCard 
            name="Adam Fraser-Harris"
            title="Co-Founder & CFO"
            role="The Financial Operator"
            description="Venture-backed CFO and former CEO (ex-blow LTD) with a track record of scaling tech companies with rigorous financial discipline."
            logo="Venture-Backed"
            image="/Images/AFH Headshot.png"
          />
        </div>

        <div className="bg-[--background] rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-serif font-semibold text-center mb-4 text-[--primary]">
            A Perfect Triad of Execution Capability
          </h3>
          <p className="text-center text-lg text-[--foreground] max-w-4xl mx-auto">
            Our team's composition is our strategic advantage, combining deep operational experience, world-class technical ability, and rigorous financial discipline. This is the team built to win.
          </p>
        </div>
      </div>
    </section>
  );
}
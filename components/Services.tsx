import SectionHeader from './section-header';
import ServiceCard from './service-card';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-secondary" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          subtitle="What We Offer"
          title="Our Services"
          className="mb-12"
        />
        <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center md:justify-between items-center">
          {/* Service Cards */}
          <ServiceCard
            imageUrl="/windowcleaning.jpeg"
            title="Interior and Exterior Window Cleaning"
            subtitle="Our crew uses only the best and high tech tools to give your window and house a deep clean."
          />
          <ServiceCard
            imageUrl="/guttercleaning.jpg"
            title="Gutter Cleaning"
            subtitle="Our crew uses only the best and high tech tools to give your window and house a deep clean."
          />
          <ServiceCard
            imageUrl="/lights.jpg"
            title="Home Light Installation"
            subtitle="Our crew uses only the best and high tech tools to give your window and house a deep clean."
          />
        </div>
      </div>
    </section>
  );
}

import Button from './button';
import Image from 'next/image';
import SectionHeader from './section-header';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          subtitle="About Us"
          title=""
          className="mb-12"
        />
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Fast and Reliable Services For Your Home
            </h1>
            <h2 className="text-lg text-gray-700 mb-6">
              True Shine Home Services is a home services company based in Bradford, Ontario.
              Founded by Ricky Trinh, we specialize in cleaning your home to give it a true shine.
              We care deeply about customer satisfaction and do not leave a spot untouched.
            </h2>
            <Button text="Learn More" variant="primary" />
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/windowwashteam.jpg"
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

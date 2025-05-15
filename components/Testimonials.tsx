import SectionHeader from './section-header';
import TestimonialCard from './testimonial-card';

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4" id="testimonials">
        {/* Section Header */}
        <SectionHeader
          subtitle="What Our Customers Are Saying"
          title="Testimonials"
          className="mb-12"
        />
        <div className="flex gap-8">
            <div className="flex flex-col gap-8">
                <TestimonialCard
                imageUrl="/deanmathers.png"
                    name="Dean Mathers"
                    review="Ricky and his team were professional, courteous and quick. They did an amazing job. I would highly recommend them."
                    date="6 Months Ago"
                />
                <TestimonialCard
                imageUrl="/defaultavatar.jpg"
                    name="Alan Gillespie"
                    review="Ricky and team did an amazing job at getting our windows looking great before the winter! Awesome job guys - highly recommended!"
                    date="7 Months Ago"
                />
                <TestimonialCard
                imageUrl="/baxter.png"
                    name="Lisa Baxter"
                    review="Ricky and his team at True Shine delivered top-notch window cleaning service. They arrived on time. Were very pleasant and ensured our satisfaction when the job was done! If your windows need a little shine, True Shine will deliver!"
                    date="8 Months Ago"
                />
            </div>
            <TestimonialCard
              imageUrl="/kevinpawlil.png"
                name="Kevin Pawlil"
                review={`I gave these guys a shot when they came to the door. I'm usually an DIY guy, saving money by doing it myself. Cleaning the windows on my house is an HUGE job, and in the 6 years living here I've only “half” done it, and even then it took me a full day...
                    
                These guys came with the right equipment and took care of it no problem. I kept an eye on them, and they really took their time with each window, even going back to a few after seeing them dry off a little.
                
                I also had 2 old abandoned hornets nests really high up that had been bugging me for years, I asked one of the gents if he could take care of it, which he agreed to without hesitation.
                
                I'm very happy I said yes, and I would 100% recommend them. Great price, great service, and great attitude from everyone I interacted with at the company. Well oiled machine!I attached a before and after photo of one of my worst windows (about 12 feet up) that’s beside a forest. The thing was nasty with cobwebs and dust making it hard to see through. These guys really made it shine!`}
                date="3 Weeks Ago"
            />
        </div>
      </div>
    </section>
  );
}

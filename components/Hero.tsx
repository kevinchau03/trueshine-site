import Button from './button';

export default function HeroSection() {
  return (
    <section className="py-20 bg-[url('/housebackground.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-start">
          <div className="w-full md:w-1/2">
              <div className="flex flex-col">
                  <h1 className="text-6xl font-bold text-white">We Enhance Homes and Give Them a True Shine</h1>
                  <h2 className="text-2xl text-white">Our team of hardworking professionals work hard to give your house the cleaning it deserves.</h2>
              </div>
              <div className="flex gap-4 mt-8">
                  <Button text="Book Now" variant="primary" href="/book-now" />
                  <Button text="See Projects" variant="secondary" href="/projects"/> 
              </div>
            </div>
        </div>
    </section>
  );
}
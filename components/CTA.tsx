import Image from "next/image";
import Button from "./button";

export default function CTASection() {
    return (
        <section className="py-20">
            <div className="relative w-full py-16 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Left image */}
                        <div className="absolute -left-8 -bottom-8 z-10 w-56 h-56 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/window-stock.webp"
                                alt="Workers installing a window"
                                width={224}
                                height={224}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Main CTA blue box */}
                        <div className="ml-16 mr-16 bg-blue-600 rounded-lg shadow-xl overflow-hidden">
                            <div className="px-6 py-12 md:py-16 md:px-12 text-center text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready To Start Your Project?</h2>
                                <p className="mb-8 text-lg">
                                    Want to make your dream home a reality in the Greater Toronto Area? Look no further than Absolute Home Services. Contact us today and receive a free quote!
                                </p>
                                <Button text="Get a Free Quote" variant="secondary" />
                            </div>
                        </div>

                        {/* Right image */}
                        <div className="absolute -right-8 -top-8 z-10 w-56 h-56 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/windowstock.jpg"
                                alt="Worker cleaning a gutter"
                                width={224}
                                height={224}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from 'next/image';

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export default function ServiceCard({ imageUrl, title, subtitle }: ServiceCardProps) {
  return (
    <div className="w-full sm:w-[395px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full relative h-[395px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

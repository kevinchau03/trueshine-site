import React from "react";

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    subtitle,
    title,
    className = "",
}) => (
    <div className={`flex justify-between w-full mb-8 ${className}`}>
        <div className="flex items-center space-x-4">
            <span className="text-xl font-medium text-primary uppercase tracking-wider">{subtitle}</span>
            <hr className="w-32 border-t-2 border-gray-300" />
        </div>
        <h2 className="text-6xl">{title}</h2>
    </div>
);

export default SectionHeader;
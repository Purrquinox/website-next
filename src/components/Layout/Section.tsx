import React from 'react';

interface SectionProps {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, description, children }) => {
	const sectionId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

	return (
		<section id={sectionId} className="mt-3">
			<h2 className="font-monster text-2xl font-medium lg:text-3xl">{title}</h2>
			{description && <p className="font-cabin text-sm md:text-base lg:text-2xl">{description}</p>}
			<div className="p-1" />
			{children}
		</section>
	);
};

export default Section;

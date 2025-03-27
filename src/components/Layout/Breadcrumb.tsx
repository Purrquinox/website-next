import React from 'react';

interface BreadcrumbProps {
	title: string;
	description?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, description }) => {
	return (
		<nav aria-label="breadcrumb" className="text-center md:text-left">
			<h1 className="scroll-m-20 font-cabin text-4xl font-extrabold tracking-tight lg:text-5xl">
				{title}
			</h1>
			{description && (
				<p className="text-md ml-3 scroll-m-20 pb-2 font-semibold tracking-tight first:mt-0 lg:text-2xl">
					{description}
				</p>
			)}
		</nav>
	);
};

export default Breadcrumb;

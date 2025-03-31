import React from 'react';

interface BreadcrumbProps {
	title: string;
	description?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, description }) => {
	return (
		<nav aria-label="breadcrumb" className="text-center md:text-left md:ml-5">
			<h1 className="font-monster text-3xl font-bold lg:text-5xl">{title}</h1>

			{description && (
				<p className="text-md lg:text-1xl pb-2 font-monster font-medium first:mt-0">
					{description}
				</p>
			)}
		</nav>
	);
};

export default Breadcrumb;

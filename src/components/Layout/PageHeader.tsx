import type { FC } from 'react';

interface PageHeaderProps {
	title: string;
	description?: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
	return (
		<header className="mb-4 w-full">
			<div className="container mx-auto px-4">
				<div className="py-6 md:py-10">
					<h1 className="font-monster text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
						{title}
					</h1>

					{description && (
						<p className="text-md mt-3 max-w-3xl font-monster text-muted-foreground md:text-lg">
							{description}
						</p>
					)}

					<div className="mt-4 h-1 w-20 rounded bg-primary"></div>
				</div>
			</div>
		</header>
	);
};

export default PageHeader;

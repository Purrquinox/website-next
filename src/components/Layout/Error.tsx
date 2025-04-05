import React from 'react';
import Link from 'next/link';
import { Button as ButtonUse } from '../ShadCN/button';

interface ButtonInt {
	name: string;
	function: () => void;
}

interface ErrorPageProps {
	status?: number;
	message?: string;
	subtext?: string;
	button?: ButtonInt | null;
}

const ErrorComp: React.FC<ErrorPageProps> = ({
	status = 0,
	message = 'Unknown',
	subtext = 'Unknown Error!',
	button = null
}) => {
	return (
		<section className="flex h-screen items-center p-16">
			<div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-monster text-9xl font-extrabold">
						<span className="sr-only">Error</span>
						{status}
					</h2>
					<p className="font-monster text-2xl font-semibold md:text-3xl">{message}</p>
					<p className="mb-8 mt-4 font-cabin text-foreground/50">{subtext}</p>

					{button ? (
						<ButtonUse onClick={button.function}>{button.name}</ButtonUse>
					) : (
						<Link href="/">
							<ButtonUse>Back Home!</ButtonUse>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

export default ErrorComp;

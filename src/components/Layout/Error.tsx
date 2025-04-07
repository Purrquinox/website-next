'use client';
import type React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ShadCN/button';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';

interface ButtonProps {
	label: string;
	onClick: () => void;
}

interface ErrorPageProps {
	status?: number;
	message?: string;
	subtext?: string;
	button?: ButtonProps | null;
}

const ErrorComp: React.FC<ErrorPageProps> = ({
	status = 404,
	message = 'Page Not Found',
	subtext = "Sorry, we couldn't find the page you're looking for.",
	button = null
}) => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30">
			<div className="container relative z-10 px-4 py-16">
				<div className="mx-auto max-w-3xl">
					<div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
						<div className="relative">
							<div className="flex h-40 w-40 items-center justify-center rounded-full bg-primary/10 md:h-56 md:w-56">
								<AlertCircle className="h-20 w-20 text-primary md:h-28 md:w-28" />
							</div>
							<div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground md:-right-4 md:-top-4 md:h-16 md:w-16 md:text-2xl">
								{status}
							</div>
						</div>

						<div className="flex-1 text-center md:text-left">
							<h1 className="mb-2 text-3xl font-bold tracking-tighter md:text-4xl">{message}</h1>
							<p className="mb-6 text-lg text-muted-foreground">{subtext}</p>

							<div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
								{button ? (
									<Button size="lg" onClick={button.onClick}>
										Try Again
										<ArrowLeft className="ml-2 h-4 w-4" />
									</Button>
								) : (
									<Link href="/" className="inline-block">
										<Button size="lg" variant="default">
											Back to Home
											<Home className="ml-2 h-4 w-4" />
										</Button>
									</Link>
								)}

								<Link href="/contact" className="inline-block">
									<Button size="lg" variant="outline">
										Contact Support
									</Button>
								</Link>
							</div>
						</div>
					</div>

					<div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
						<p>If you believe this is an error, please contact our support team.</p>
					</div>
				</div>
			</div>

			<div className="absolute left-1/4 top-1/4 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
			<div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
		</div>
	);
};

export default ErrorComp;

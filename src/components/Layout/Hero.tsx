import React from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/Layout/Breadcrumb';
import Section from '@/components/Layout/Section';
import { Button } from '../ShadCN/button';
import Link from 'next/link';
import { Users, UserPlus, FolderKanban, Handshake, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
	const router = useRouter();

	return (
		<main className="container mx-auto p-4">
			<Breadcrumb
				title="👋 Welcome!"
				description="At Purrquinox, we're focused on creating meaningful, practical solutions to real problems.
        Whether it's tools to enhance community safety or projects that make workflows easier, we put
        our energy into building things that work and help others. No corporate values, just a small
        team doing what we love."
			/>

			<Section title="What We Believe">
				<ol className="ml-10 list-disc font-monster">
					<li>
						<span className="font-cabin font-bold">Keep it Real:</span> Focus on practical,
						effective solutions rather than overcomplicated ideas.
					</li>
					<li>
						<span className="font-cabin font-bold">Work Hard, Stay Humble:</span> We're not here to
						brag—just to build things that matter.
					</li>
					<li>
						<span className="font-cabin font-bold">Make It Count:</span> If it's worth doing, it's
						worth doing well.
					</li>
					<li>
						<span className="font-cabin font-bold">Support the Community:</span> We're here to help
						and grow alongside the people who use our work.
					</li>
				</ol>
			</Section>

			<div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
				<Link href="/team" className="group">
					<Button
						variant="outline"
						className="h-10 justify-between rounded-md border-border bg-card px-2 text-sm font-medium text-card-foreground shadow-sm transition-all duration-300 hover:bg-card/90 hover:shadow-md"
					>
						<div className="flex items-center">
							<div className="mr-2 rounded-full bg-primary p-1">
								<Users className="h-3 w-3 text-primary-foreground" />
							</div>
							<span>About our Team</span>
						</div>
						<ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
					</Button>
				</Link>

				<Link href="/team" className="group">
					<Button
						variant="outline"
						className="h-10 justify-between rounded-md border-border bg-secondary px-2 text-sm font-medium text-secondary-foreground shadow-sm transition-all duration-300 hover:bg-secondary/90 hover:shadow-md"
					>
						<div className="flex items-center">
							<div className="mr-2 rounded-full bg-primary p-1">
								<UserPlus className="h-3 w-3 text-primary-foreground" />
							</div>
							<span>Join our Team!</span>
						</div>
						<ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
					</Button>
				</Link>

				<Link href="/projects" className="group">
					<Button
						variant="outline"
						className="h-10 justify-between rounded-md border-border bg-card px-2 text-sm font-medium text-card-foreground shadow-sm transition-all duration-300 hover:bg-card/90 hover:shadow-md"
					>
						<div className="flex items-center">
							<div className="mr-2 rounded-full bg-primary p-1">
								<FolderKanban className="h-3 w-3 text-primary-foreground" />
							</div>
							<span>Our Projects</span>
						</div>
						<ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
					</Button>
				</Link>

				<Link href="/partners" className="group">
					<Button
						variant="outline"
						className="h-10 justify-between rounded-md border-border bg-secondary px-2 text-sm font-medium text-secondary-foreground shadow-sm transition-all duration-300 hover:bg-secondary/90 hover:shadow-md"
					>
						<div className="flex items-center">
							<div className="mr-2 rounded-full bg-primary p-1">
								<Handshake className="h-3 w-3 text-primary-foreground" />
							</div>
							<span>Our Partners</span>
						</div>
						<ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
					</Button>
				</Link>
			</div>
		</main>
	);
};

export default Hero;

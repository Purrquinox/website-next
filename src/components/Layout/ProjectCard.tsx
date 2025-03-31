'use client';
import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ShadCN/badge';
import { Card } from '@/components/ShadCN/card';

interface Props {
	name: string;
	description: string;
	image?: string | null;
	longImage?: string | null;
	link?: string | null;
	flairs?: string[] | null;
}

const ProjectCard = ({ name, description, image, longImage, link, flairs }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const CardComponent = ({ children }: { children: React.ReactNode }) => {
		if (link) {
			return (
				<Link
					href={link}
					className="block h-full no-underline outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
				>
					{children}
				</Link>
			);
		}
		return <>{children}</>;
	};

	return (
		<CardComponent>
			<Card
				className={cn(
					'group relative h-full overflow-hidden border-0 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white shadow-lg transition-all duration-300',
					link && 'hover:shadow-xl hover:shadow-primary/10',
					isHovered && 'scale-[1.02]'
				)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Subtle gradient overlay that animates on hover */}
				<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

				{/* Main card content */}
				<div className="relative z-10 py-3 px-4">
					{/* Top flair badge */}
					{flairs && flairs.length > 0 && (
						<div className="mb-2">
							<Badge className="bg-primary px-3 py-1 font-medium uppercase tracking-wider text-primary-foreground shadow-md">
								{flairs[0]}
							</Badge>
						</div>
					)}

					<div className="flex flex-row items-center gap-4 pb-4">
						{/* Logo/Image */}
						{(image || longImage) && (
							<div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/10 p-0.5 ring-2 ring-white/20">
								<img
									src={image || longImage || ''}
									alt={`${name} logo`}
									className="h-full w-full rounded-full object-cover"
								/>
							</div>
						)}

						{/* Project name */}
						<div className="flex items-center gap-2">
							<h3 className="text-xl font-bold tracking-tight text-white">{name}</h3>
							{link && (
								<ExternalLink className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
							)}
						</div>
					</div>

					{/* Description */}
					<div className="space-y-5">
						<p className="text-sm leading-relaxed text-zinc-300">{description}</p>

						{/* Additional flairs */}
						{flairs && flairs.length > 1 && (
							<div className="flex flex-wrap gap-2">
								{flairs.slice(1).map((flair) => (
									<Badge
										key={flair}
										variant="secondary"
										className="bg-white/10 text-xs font-normal text-zinc-200 hover:bg-white/20"
									>
										{flair}
									</Badge>
								))}
							</div>
						)}
					</div>
				</div>

				{/* Decorative corner accent */}
				<div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-primary/20 blur-2xl transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:bg-primary/30" />
			</Card>
		</CardComponent>
	);
};

export default ProjectCard;

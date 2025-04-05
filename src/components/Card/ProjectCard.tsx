'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ShadCN/badge';
import { Card } from '@/components/ShadCN/card';
import { ProjectType } from '@/lib/data';

interface ProjectCardProps {
	project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const hasFlairs = project.tags && project.tags.length > 0;
	const hasLongImage = !!project.banner;

	const getSocialIcon = (platform: string) => {
		switch (platform) {
			case 'github':
				return <Github className="h-4 w-4" />;
			case 'twitter':
				return <Twitter className="h-4 w-4" />;
			case 'linkedin':
				return <Linkedin className="h-4 w-4" />;
			case 'instagram':
				return <Instagram className="h-4 w-4" />;
			case 'website':
				return <Globe className="h-4 w-4" />;
			default:
				return <ExternalLink className="h-4 w-4" />;
		}
	};

	const cardContent = (
		<Card
			className={cn(
				'group relative h-full overflow-hidden border-0 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white shadow-lg transition-all duration-300',
				project.link && 'hover:shadow-xl hover:shadow-primary/10',
				isHovered && 'scale-[1.02]',
				hasLongImage ? 'pb-48' : ''
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Subtle gradient overlay that animates on hover */}
			<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			{/* Main card content */}
			<div className="relative z-10 px-4 py-3">
				{/* Top flair badge */}
				{hasFlairs && (
					<div className="mb-2">
						<Badge className="bg-primary px-3 py-1 font-medium uppercase tracking-wider text-primary-foreground shadow-md">
							{project.tags[0]}
						</Badge>
					</div>
				)}

				<div className="flex flex-row items-center gap-4 pb-4">
					{/* Logo/Image */}
					{project.image && (
						<div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/10 p-0.5 ring-2 ring-white/20">
							<Image
								src={project.image || '/regular.png'}
								alt={`${name} logo`}
								width={48}
								height={48}
								className="h-full w-full rounded-full object-cover"
							/>
						</div>
					)}

					{/* Project name */}
					<div className="flex items-center gap-2">
						<h3 className="text-xl font-bold tracking-tight text-white">{project.name}</h3>
						{project.link && (
							<ExternalLink className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
						)}
					</div>
				</div>

				{/* Description */}
				<div className="space-y-5">
					<p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>

					{/* Additional flairs */}
					{hasFlairs && project.tags.length > 1 && (
						<div className="mb-2 flex flex-wrap gap-2">
							{project.tags.slice(1).map((flair) => (
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

					{/* Social Media Links */}
					{(project.socials || []).length > 0 && (
						<div className="flex flex-wrap gap-3 pt-1">
							{(project.socials || []).map((social, index) => (
								<a
									key={index}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
									aria-label={`${social.platform} link`}
								>
									{getSocialIcon(social.platform)}
								</a>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Long Image at the bottom */}
			{hasLongImage && (
				<div className="absolute bottom-0 left-0 right-0 h-44 w-full overflow-hidden">
					<div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900" />
					<Image
						src={project.banner || '/banner.png'}
						alt={`${name} preview`}
						fill
						className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			)}

			{/* Decorative corner accent */}
			<div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-primary/20 blur-2xl transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:bg-primary/30" />
		</Card>
	);

	if (project.link) {
		return (
			<Link
				href={project.link}
				className="block h-full no-underline outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
			>
				{cardContent}
			</Link>
		);
	}

	return cardContent;
};

export default ProjectCard;

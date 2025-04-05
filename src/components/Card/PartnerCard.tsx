'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ShadCN/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ShadCN/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ShadCN/hover-card';
import { Github, Instagram, Linkedin, Twitter, ExternalLink, Globe } from 'lucide-react';
import { PartnerType } from '@/lib/data';

interface PartnerCardProps {
	partner: PartnerType;
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
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

	return (
		<Card className="overflow-hidden transition-all hover:shadow-md">
			{partner.banner && (
				<div className="relative h-32 w-full">
					<Image
						src={partner.banner || '/banner.png'}
						alt={`${partner.name} banner`}
						fill
						className="object-cover"
					/>
				</div>
			)}
			<CardHeader className="flex flex-row items-center gap-4 space-y-0">
				<div className="relative h-16 w-16 overflow-hidden rounded-md">
					<Image
						src={partner.image || '/regular.png'}
						alt={partner.name}
						fill
						className="object-cover"
					/>
				</div>
				<div>
					<HoverCard>
						<HoverCardTrigger asChild>
							<Link href={partner.link} className="text-xl font-bold hover:underline">
								{partner.name}
							</Link>
						</HoverCardTrigger>
						<HoverCardContent className="w-80">
							<div className="flex justify-between space-x-4">
								<div className="space-y-1">
									<h4 className="text-sm font-semibold">{partner.name}</h4>
									<p className="text-sm">{partner.description}</p>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
					{partner.flairs && partner.flairs.length > 0 && (
						<div className="mt-1 flex flex-wrap gap-1">
							{partner.flairs.map((flair, index) => (
								<Badge key={index} variant="secondary" className="text-xs">
									{flair}
								</Badge>
							))}
						</div>
					)}
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-muted-foreground">{partner.description}</p>
			</CardContent>
			{partner.socials && partner.socials.length > 0 && (
				<CardFooter className="flex gap-2 border-t p-4">
					{partner.socials.map((social, index) => (
						<Link
							key={index}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
						>
							{getSocialIcon(social.platform)}
							<span className="sr-only">{social.platform}</span>
						</Link>
					))}
				</CardFooter>
			)}
		</Card>
	);
};

export default PartnerCard;

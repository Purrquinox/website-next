import type { StaffMember } from '@/lib/data';
import { ExternalLink, Github, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ShadCN/avatar';
import { Card, CardContent } from '@/components/ShadCN/card';
import { Button } from '@/components/ShadCN/button';

interface StaffMemberCardProps {
	member: StaffMember;
}

const StaffCard = ({ member }: StaffMemberCardProps) => {
	const getSocialIcon = (platform: string) => {
		switch (platform.toLowerCase()) {
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

	const getInitials = (name: string) => {
		return name
			.split(' ')
			.map((part) => part.charAt(0))
			.join('')
			.toUpperCase()
			.substring(0, 2);
	};

	return (
		<Card className="mx-auto w-full max-w-md overflow-hidden border-card-foreground bg-card/90 backdrop-blur-sm">
			<CardContent className="p-4">
				<div className="flex flex-col items-center gap-4 sm:flex-row">
					<Avatar className="h-20 w-20 border border-card-foreground sm:h-16 sm:w-16">
						<AvatarImage src={member?.image || '/regular.png'} alt={`Photo of ${member.name}`} />
						<AvatarFallback>{getInitials(member.name)}</AvatarFallback>
					</Avatar>

					<div className="min-w-0 flex-1 text-center sm:text-left">
						<h3 className="truncate text-lg font-semibold text-card-foreground">{member.name}</h3>
						<p className="truncate text-sm font-semibold text-card-foreground/75">
							@{member.username}
						</p>
						<p className="truncate text-sm text-card-foreground">{member.roles.join(', ')}</p>

						{member.socials && member.socials.length > 0 && (
							<div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
								{member.socials.map((social, index) => (
									<Button
										key={index}
										variant="ghost"
										size="icon"
										className="h-8 w-8 rounded-full"
										asChild
									>
										<a
											href={social.url}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${member.name}'s ${social.platform}`}
										>
											{getSocialIcon(social.platform)}
										</a>
									</Button>
								))}
							</div>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default StaffCard;

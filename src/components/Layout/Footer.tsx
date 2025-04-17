'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Github } from 'lucide-react';
import { Separator } from '@/components/ShadCN/separator';
import { Button } from '@/components/ShadCN/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ShadCN/tooltip';
import { Card, CardContent } from '@/components/ShadCN/card';

interface Navigation {
	name: string;
	href?: string | null;
	class?: string | null;
	onClick?: () => void;
}

interface SocialMedia {
	name: string;
	href: string;
	icon: React.ElementType;
	ariaLabel: string;
}

const navigation: Navigation[] = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'Our Team',
		href: '/team'
	},
	{
		name: 'Our Projects',
		href: '/projects'
	},
	{
		name: 'Partners',
		href: '/partners'
	},
	{
		name: 'Apply Now',
		href: '/apply'
	}
];

const otherNavigation: Navigation[] = [
	{
		name: 'Terms',
		href: '/terms'
	},
	{
		name: 'Privacy',
		href: '/privacy'
	},
	{
		name: 'Cookies',
		href: '/cookies'
	}
];

const socialLinks: SocialMedia[] = [
	{
		name: 'X',
		href: 'https://x.com/heypurrquinox',
		icon: Twitter,
		ariaLabel: 'Follow us on X (formerly Twitter)'
	},
	{
		name: 'GitHub',
		href: 'https://github.com/purrquinox',
		icon: Github,
		ariaLabel: 'Check out our GitHub repositories'
	}
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Card className="mt-12 border-t bg-muted/40 shadow-none">
			<CardContent className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
					{/* Brand Column */}
					<div className="md:col-span-1 lg:col-span-2">
						<div className="flex items-center space-x-3">
							<Image
								src="/logo.png"
								alt="Our Logo"
								className="h-10 w-10 rounded-full"
								width={40}
								height={40}
							/>
							<span className="text-xl font-bold">Purrquinox</span>
						</div>
						<p className="mt-4 text-sm text-muted-foreground">
							Empowering innovation through collaboration and cutting-edge technology solutions.
						</p>
						<div className="mt-6 flex flex-wrap gap-2">
							<TooltipProvider>
								{socialLinks.map((social) => {
									const Icon = social.icon;
									return (
										<Tooltip key={social.name}>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													asChild
													className="h-9 w-9 rounded-full"
												>
													<a
														href={social.href}
														target="_blank"
														rel="noopener noreferrer"
														aria-label={social.ariaLabel}
													>
														<Icon className="h-4 w-4" />
													</a>
												</Button>
											</TooltipTrigger>
											<TooltipContent>
												<p>{social.ariaLabel}</p>
											</TooltipContent>
										</Tooltip>
									);
								})}
							</TooltipProvider>
						</div>
					</div>

					{/* Navigation Column */}
					<div className="md:col-span-1">
						<h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
						<ul className="mt-4 space-y-2">
							{navigation.slice(0, 3).map((item) => (
								<li key={item.name}>
									<Button
										variant="link"
										className="h-auto p-0 text-sm font-normal text-muted-foreground"
										asChild
									>
										<Link href={item.href || ''} onClick={item.onClick}>
											{item.name}
										</Link>
									</Button>
								</li>
							))}
						</ul>
					</div>

					{/* More Links Column */}
					<div className="md:col-span-1">
						<h3 className="text-sm font-semibold uppercase tracking-wider">More</h3>
						<ul className="mt-4 space-y-2">
							{navigation.slice(3).map((item) => (
								<li key={item.name}>
									<Button
										variant="link"
										className="h-auto p-0 text-sm font-normal text-muted-foreground"
										asChild
									>
										<Link href={item.href || ''} onClick={item.onClick}>
											{item.name}
										</Link>
									</Button>
								</li>
							))}
						</ul>
					</div>

					{/* Legal Column */}
					<div className="md:col-span-1">
						<h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
						<ul className="mt-4 space-y-2">
							{otherNavigation.map((item) => (
								<li key={item.name}>
									<Button
										variant="link"
										className="h-auto p-0 text-sm font-normal text-muted-foreground"
										asChild
									>
										<Link href={item.href || ''} onClick={item.onClick}>
											{item.name}
										</Link>
									</Button>
								</li>
							))}
						</ul>
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
					<p className="text-sm text-muted-foreground">
						© {currentYear} Purrquinox. All rights reserved.
					</p>
					<p className="text-sm text-muted-foreground">
						Designed with <span className="text-red-500">♥</span> for a better web
					</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default Footer;

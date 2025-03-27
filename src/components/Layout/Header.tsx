'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, User } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ShadCN/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ShadCN/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ShadCN/dropdown-menu';

interface Navigation {
	name: string;
	href?: string | null;
	class?: string | null;
	onClick?: () => void;
}

const navigation: Navigation[] = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'About',
		href: '/about'
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
	}
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container mx-auto flex h-16 items-center justify-between px-3 md:px-0 lg:px-0">
				<div className="flex items-center justify-center gap-2">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="pr-0">
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="/"
									className="flex items-center gap-2 text-lg font-semibold"
									onClick={() => setIsOpen(false)}
								>
									<Image
										src="/logo.png"
										alt="Our Logo"
										className="h-8 w-8 rounded-full bg-background"
										width={32}
										height={32}
									/>
									<span>Purrquinox</span>
								</Link>

								{navigation.map((i: Navigation) => {
									const className = `${i.class || ''} hover:text-foreground/80`;
									return (
										<>
											<Link
												href={i.href || '#'}
												className={className}
												onClick={() => {
													setIsOpen(false);
													if (i.onClick) i.onClick();
												}}
											>
												{i.name}
											</Link>
										</>
									);
								})}
							</nav>
						</SheetContent>
					</Sheet>

					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/logo.png"
							alt="Our Logo"
							className="h-8 w-8 rounded-full bg-background"
							width={32}
							height={32}
						/>
						<span className="text-xl font-bold">Purrquinox</span>
					</Link>
				</div>

				<nav className="hidden gap-6 md:flex">
					{navigation.map((i: Navigation) => {
						const className = `${i.class || ''} text-sm font-medium transition-colors hover:text-primary`;
						return (
							<>
								<Link
									href={i.href || '#'}
									className={className}
									onClick={() => {
										setIsOpen(false);
										if (i.onClick) i.onClick();
									}}
								>
									{i.name}
								</Link>
							</>
						);
					})}
				</nav>
			</div>
		</header>
	);
};

export default Header;

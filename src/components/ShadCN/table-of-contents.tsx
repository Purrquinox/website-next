'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ShadCN/card';

export type TOCItem = {
	id: string;
	label: string;
	level?: number;
	href?: string;
	subItems?: TOCItem[];
};

interface TableOfContentsProps {
	items: TOCItem[];
	title?: string;
	activeId?: string;
	enableHighlighting?: boolean;
	className?: string;
	cardStyle?: boolean;
	accentColor?: string;
}

export function TableOfContents({
	items,
	title = 'Table of Contents',
	activeId: externalActiveId,
	enableHighlighting = true,
	className,
	cardStyle = true,
	accentColor = 'red'
}: TableOfContentsProps) {
	const [activeId, setActiveId] = useState<string>(externalActiveId || '');

	// Use external activeId if provided, otherwise use internal state
	const currentActiveId = externalActiveId || activeId;

	// Set up intersection observer to highlight active section when scrolling
	useEffect(() => {
		if (!enableHighlighting) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: '-100px 0px -80% 0px' }
		);

		const sections = document.querySelectorAll('section[id], [data-toc-id]');
		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, [enableHighlighting]);

	// Get the appropriate accent color classes
	const getAccentClasses = (isActive: boolean) => {
		const colorMap: Record<string, { bg: string; text: string }> = {
			red: { bg: 'bg-red-50', text: 'text-red-500' },
			blue: { bg: 'bg-blue-50', text: 'text-blue-500' },
			green: { bg: 'bg-green-50', text: 'text-green-500' },
			purple: { bg: 'bg-purple-50', text: 'text-purple-500' },
			orange: { bg: 'bg-orange-50', text: 'text-orange-500' },
			slate: { bg: 'bg-slate-100', text: 'text-slate-700' }
		};

		const colors = colorMap[accentColor] || colorMap.red;

		return isActive ? `${colors.bg} ${colors.text} font-medium` : '';
	};

	const renderTOCItems = (tocItems: TOCItem[], level = 0) => {
		return (
			<div className={cn(level > 0 ? 'ml-4 space-y-1 border-l-2 border-muted pl-2' : 'space-y-1')}>
				{tocItems.map((item) => {
					const isActive = currentActiveId === item.id;
					const href = item.href || `#${item.id}`;

					return (
						<div key={item.id} className="space-y-1">
							<Link
								href={href}
								className={cn(
									'flex items-center rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted',
									isActive ? getAccentClasses(true) : 'text-muted-foreground',
									level > 0 ? 'text-xs' : 'text-sm'
								)}
								onClick={(e) => {
									if (href.startsWith('#')) {
										e.preventDefault();
										const element = document.getElementById(item.id);
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' });
											window.history.pushState(null, '', href);
										}
									}
								}}
							>
								{level > 0 && <ChevronRight className="mr-1 h-3 w-3 flex-shrink-0" />}
								<span className="truncate">{item.label}</span>
							</Link>

							{item.subItems &&
								item.subItems.length > 0 &&
								renderTOCItems(item.subItems, level + 1)}
						</div>
					);
				})}
			</div>
		);
	};

	const content = (
		<>
			{title && <h3 className="mb-3 text-lg font-semibold">{title}</h3>}
			{renderTOCItems(items)}
		</>
	);

	if (cardStyle) {
		return <Card className={cn('p-4', className)}>{content}</Card>;
	}

	return <div className={className}>{content}</div>;
}

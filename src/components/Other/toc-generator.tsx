'use client';

import { useEffect, useState } from 'react';
import { TableOfContents, type TOCItem } from '@/components/ShadCN/table-of-contents';

interface TOCGeneratorProps {
	selector?: string;
	title?: string;
	maxDepth?: number;
	className?: string;
	cardStyle?: boolean;
	accentColor?: string;
	containerSelector?: string;
}

const TOCGenerator = ({
	selector = 'h2, h3, h4, h5, h6',
	title = 'Table of Contents',
	maxDepth = 3,
	className,
	cardStyle = true,
	accentColor = 'red',
	containerSelector = 'main'
}: TOCGeneratorProps) => {
	const [items, setItems] = useState<TOCItem[]>([]);
	const [activeId, setActiveId] = useState<string>('');

	useEffect(() => {
		// Find the container element (defaults to main if not specified)
		const container = containerSelector
			? document.querySelector(containerSelector)
			: document.querySelector('main');

		if (!container) return;

		// Get all headings within the container
		const headings = Array.from(container.querySelectorAll(selector)).filter((el) => {
			// Only include headings up to the specified max depth
			const level = Number.parseInt(el.tagName.substring(1));
			return level <= maxDepth + 1; // h2 is level 2, so maxDepth 3 means h2-h5
		});

		// Generate TOC items from headings
		const tocItems: TOCItem[] = [];
		const idMap = new Map<number, TOCItem[]>();

		headings.forEach((heading) => {
			const level = Number.parseInt(heading.tagName.substring(1));
			const id =
				heading.id ||
				`toc-${level}-${heading.textContent?.trim().toLowerCase().replace(/\s+/g, '-')}`;

			// Ensure the heading has an ID for linking
			if (!heading.id) {
				heading.id = id;
			}

			const item: TOCItem = {
				id,
				label: heading.textContent?.trim() || '',
				level,
				subItems: []
			};

			// Add to the appropriate level
			if (level === 2 || !idMap.has(level - 1)) {
				tocItems.push(item);
				idMap.set(level, [item]);
			} else {
				const parentLevel = idMap.get(level - 1);
				if (parentLevel && parentLevel.length > 0) {
					const parent = parentLevel[parentLevel.length - 1];
					if (!parent.subItems) parent.subItems = [];
					parent.subItems.push(item);
				}

				// Update the level map
				if (!idMap.has(level)) {
					idMap.set(level, [item]);
				} else {
					idMap.get(level)?.push(item);
				}
			}
		});

		setItems(tocItems);

		// Set up intersection observer for active section highlighting
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

		headings.forEach((heading) => observer.observe(heading));

		return () => {
			headings.forEach((heading) => observer.unobserve(heading));
		};
	}, [selector, maxDepth, containerSelector]);

	if (items.length === 0) {
		return null;
	}

	return (
		<TableOfContents
			items={items}
			title={title}
			activeId={activeId}
			className={className}
			cardStyle={cardStyle}
			accentColor={accentColor}
		/>
	);
};

export default TOCGenerator;

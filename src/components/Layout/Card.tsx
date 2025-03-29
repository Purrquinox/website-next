'use client';
import { Card as ShadCard } from '@/components/ShadCN/card';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
	name: string;
	description: string;
	image?: string | null;
	longImage?: string | null;
	link?: string | null;
	flairs?: string[] | null;
}

const Card = ({ name, description, image, longImage, link = '/', flairs }: Props) => {
	return (
		<ShadCard className="bg-card max-w-sm rounded-lg border p-3 shadow-md hover:bg-card/75">
			<Link href={link || '#'} className="block">
				{flairs && flairs.length > 0 && (
					<div className="flex space-x-2">
						{flairs.map((flair, index) => (
							<span
								key={index}
								className="rounded-full bg-red-700 p-1 px-2 font-mono text-xs font-bold uppercase text-white"
							>
								{flair}
							</span>
						))}
					</div>
				)}

				<div className={cn('flex items-center', { 'mt-3': flairs && flairs.length > 0 })}>
					{image && image.startsWith('fa-') ? (
						<i className={cn('fa-xl mb-0.5 max-h-[25px] rounded-full text-black', image)}></i>
					) : (
						image && (
							<Image
								src={image}
								alt={`${name} logo`}
								width={25}
								height={25}
								className="rounded-full bg-black"
								onError={(e) => (e.currentTarget.src = '/logo.png')}
							/>
						)
					)}
					<h5
						className={cn('text-md overflow-x-auto font-semibold text-card-foreground', {
							'ml-2': image
						})}
					>
						{name}
					</h5>
				</div>

				<p className="mt-1 text-base font-medium tracking-tight text-card-foreground">
					{description}
				</p>

				{longImage && (
					<Image
						src={longImage}
						alt={`${name} Image`}
						width={200}
						height={200}
						className="mt-3 max-h-[200px] w-full object-cover"
						onError={(e) => (e.currentTarget.src = '/logo.png')}
					/>
				)}
			</Link>
		</ShadCard>
	);
};

export default Card;

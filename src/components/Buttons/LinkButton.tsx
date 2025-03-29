import { ArrowRight, LucideProps, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ShadCN/button';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface LinkButtonProps {
	name: string;
	href: string;
	className?: string;
	icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>> & RefAttributes<SVGSVGElement>;
}

const LinkButton = ({ name, href, className, icon: Icon }: LinkButtonProps) => {
	return (
		<Link href={href} className={`${className}`}>
			<Button
				variant="outline"
				className="group h-10 justify-between rounded-md border-border bg-card px-2 text-sm font-medium text-card-foreground shadow-sm transition-all duration-300 hover:bg-card/90 hover:shadow-md"
			>
				<div className="flex items-center">
					<div className="mr-2 rounded-full bg-primary p-1">
						<Icon className="h-3 w-3 text-primary-foreground" />
					</div>
					<span>{name}</span>
				</div>
				<ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
			</Button>
		</Link>
	);
};

export default LinkButton;

import React from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/Layout/Breadcrumb';
import Section from '@/components/Layout/Section';
import { Users, UserPlus, FolderKanban, Handshake } from 'lucide-react';
import LinkButton from '../Buttons/LinkButton';

const Hero: React.FC = () => {
	const router = useRouter();

	return (
		<main className="container mx-auto p-4">
			<Breadcrumb
				title="👋 Welcome!"
				description="At Purrquinox, we're focused on creating meaningful, practical solutions to real problems.
        Whether it's tools to enhance community safety or projects that make workflows easier, we put
        our energy into building things that work and help others. No corporate values, just a small
        team doing what we love."
			/>

			<Section title="What We Believe">
				<ol className="ml-10 list-disc font-cabin font-bold">
					<li>
						<span className="font-monster font-medium">Keep it Real:</span> Focus on practical,
						effective solutions rather than overcomplicated ideas.
					</li>
					<li>
						<span className="font-monster font-medium">Work Hard, Stay Humble:</span> We're not here
						to brag—just to build things that matter.
					</li>
					<li>
						<span className="font-monster font-medium">Make It Count:</span> If it's worth doing,
						it's worth doing well.
					</li>
					<li>
						<span className="font-monster font-medium">Support the Community:</span> We're here to
						help and grow alongside the people who use our work.
					</li>
				</ol>
			</Section>

			<div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
				<LinkButton name="Our Team" href="/team" className="inline-grid" icon={Users} />

				<LinkButton name="Apply Now!" href="/apply" className="inline-grid" icon={UserPlus} />

				<LinkButton
					name="Our Projects"
					href="/projects"
					className="inline-grid"
					icon={FolderKanban}
				/>

				<LinkButton name="Our Partners" href="/partners" className="inline-grid" icon={Handshake} />
			</div>
		</main>
	);
};

export default Hero;

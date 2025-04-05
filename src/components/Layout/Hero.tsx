import { Card, CardContent } from '@/components/ShadCN/card';
import {
	Lock,
	Zap,
	Code,
	Users,
	Sparkles,
	FolderKanban,
	Handshake,
	UserPlus
} from 'lucide-react';
import LinkButton from '../Buttons/LinkButton';

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
			{/* Hero Section */}
			<div className="relative overflow-hidden bg-slate-900 text-white">
				<div className="absolute inset-0 z-0 opacity-20">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#4f46e5,transparent)]"></div>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#8b5cf6,transparent)]"></div>
				</div>
				<div className="container relative z-10 mx-auto px-4 py-16 sm:py-24">
					<Breadcrumb
						title="👋 Welcome to Purrquinox"
						description="We're focused on creating meaningful, practical solutions to real problems. Whether it's tools to enhance community safety or projects that make workflows easier, we put our energy into building things that work and help others."
					/>
					<div className="mt-8 flex flex-wrap gap-4">
						<LinkButton name="Our Team" href="/team" className="inline-grid" icon={Users} />

						<LinkButton name="Apply Now!" href="/apply" className="inline-grid" icon={UserPlus} />

						<LinkButton
							name="Our Projects"
							href="/projects"
							className="inline-grid"
							icon={FolderKanban}
						/>

						<LinkButton
							name="Our Partners"
							href="/partners"
							className="inline-grid"
							icon={Handshake}
						/>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-12">
				{/* Mission Section */}
				<Section title="Innovating for a Connected and Privacy-Focused Future">
					<div className="prose prose-slate dark:prose-invert max-w-none">
						<p className="text-lg leading-relaxed">
							Purrquinox is a technology collective dedicated to building high-performance,
							open-source, and privacy-centric solutions. Our mission is to create seamless,
							efficient, and secure digital experiences that empower users while respecting their
							privacy and autonomy. We believe in fostering a digital ecosystem where innovation
							meets responsibility, ensuring that our tools and technologies are accessible,
							transparent, and community-driven.
						</p>
					</div>
				</Section>

				{/* Vision Section */}
				<Section title="🌍 Our Vision">
					<div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<VisionCard
							icon={<Lock className="h-6 w-6 text-indigo-600" />}
							title="Privacy First"
							description="Solutions designed with privacy as a core foundation, ensuring your data remains yours."
						/>
						<VisionCard
							icon={<Code className="h-6 w-6 text-indigo-600" />}
							title="Open Source & Transparency"
							description="Encouraging collaboration and community input through transparent development."
						/>
						<VisionCard
							icon={<Zap className="h-6 w-6 text-indigo-600" />}
							title="High Performance & Efficiency"
							description="Building tools with speed, reliability, and scalability as core principles."
						/>
						<VisionCard
							icon={<Sparkles className="h-6 w-6 text-indigo-600" />}
							title="Seamless Integration"
							description="Technologies built to work harmoniously with existing systems and workflows."
						/>
						<VisionCard
							icon={<Users className="h-6 w-6 text-indigo-600" />}
							title="User Empowerment"
							description="Tools that allow full customization and control over your digital experience."
						/>
					</div>
				</Section>

				{/* Community Section */}
				<Section title="🤝 Community & Collaboration">
					<div className="prose prose-slate dark:prose-invert max-w-none">
						<p className="text-lg leading-relaxed">
							Purrquinox thrives on community engagement. Whether you're a developer, designer,
							writer, or enthusiast, there are many ways to get involved:
						</p>
					</div>
					<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<CommunityCard
							title="Explore Repositories"
							description="Check out our open-source projects and contribute"
						/>
						<CommunityCard
							title="Join Discussions"
							description="Share ideas and collaborate with our community"
						/>
						<CommunityCard
							title="Report Issues"
							description="Help us improve by providing valuable feedback"
						/>
						<CommunityCard
							title="Share Knowledge"
							description="Create tutorials and documentation for others"
						/>
						<CommunityCard
							title="Advocate Privacy"
							description="Spread awareness about digital privacy importance"
						/>
					</div>
				</Section>

				{/* Why Choose Section */}
				<Section title="🚀 Why Choose Purrquinox?">
					<div className="mt-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 dark:from-indigo-950/50 dark:to-purple-950/50">
						<div className="grid gap-6 md:grid-cols-2">
							<div className="space-y-4">
								<FeatureItem
									title="Privacy Commitment"
									description="No invasive data collection. Your data belongs to you."
								/>
								<FeatureItem
									title="Cutting-Edge Tech"
									description="Fast, efficient, and secure tools built with modern technologies."
								/>
							</div>
							<div className="space-y-4">
								<FeatureItem
									title="Ethical Development"
									description="Guided by integrity and openness in all our processes."
								/>
								<FeatureItem
									title="Global Community"
									description="A diverse network of contributors sharing a common goal."
								/>
							</div>
						</div>
					</div>
				</Section>
			</div>
		</main>
	);
}

const VisionCard = ({ icon, title, description }: any) => {
	return (
		<Card className="overflow-hidden transition-all hover:shadow-md dark:bg-slate-800/50">
			<CardContent className="p-6">
				<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/50">
					{icon}
				</div>
				<h3 className="mb-2 font-monster text-xl font-semibold">{title}</h3>
				<p className="text-slate-600 dark:text-slate-300">{description}</p>
			</CardContent>
		</Card>
	);
};

const CommunityCard = ({ title, description }: any) => {
	return (
		<div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
			<h3 className="font-monster text-lg font-medium">{title}</h3>
			<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
		</div>
	);
};

const FeatureItem = ({ title, description }: any) => {
	return (
		<div className="flex items-start gap-3">
			<div className="mt-1 rounded-full bg-indigo-100 p-1 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
				<Sparkles className="h-4 w-4" />
			</div>
			<div>
				<h3 className="font-monster text-lg font-medium">{title}</h3>
				<p className="text-slate-600 dark:text-slate-300">{description}</p>
			</div>
		</div>
	);
};

const Section = ({
	title,
	description,
	children
}: {
	title: string;
	description?: string;
	children?: React.ReactNode;
}) => {
	const sectionId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

	return (
		<section id={sectionId} className="py-12">
			<div className="mb-8 border-l-4 border-indigo-500 pl-4">
				<h2 className="font-monster text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
				{description && (
					<p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{description}</p>
				)}
			</div>
			<div className="mt-6">{children}</div>
		</section>
	);
};

const Breadcrumb = ({ title, description }: { title: string; description?: string }) => {
	return (
		<div className="max-w-3xl">
			<h1 className="font-monster text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
				{title}
			</h1>
			{description && (
				<p className="mt-6 text-xl leading-8 text-slate-200 sm:max-w-2xl">{description}</p>
			)}
		</div>
	);
};

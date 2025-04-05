import SEO from '@/components/SEO/SEO';
import ProjectCard from '@/components/Cards/ProjectCard';
import PageHeader from '@/components/Layout/PageHeader';
import { projects as Projects, type ProjectType } from '@/lib/data.ts';

const projectsList: ProjectType[] = Projects.sort((a: ProjectType, b: ProjectType) => {
	return (b.image != null ? 1 : 0) - (a.image != null ? 1 : 0);
});

const projects = () => {
	return (
		<>
			<SEO title="Projects | Purrquinox" />

			<PageHeader
				title="Our Projects"
				description="Explore our projects and see what we are working on."
			/>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projectsList.map((project: ProjectType) => {
					return (
						<>
							<div className="mx-3 inline-grid self-auto">
								<ProjectCard project={project} />
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default projects;

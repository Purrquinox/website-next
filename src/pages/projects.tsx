import SEO from '@/components/SEO/SEO';
import ProjectCard from '@/components/Layout/ProjectCard';
import { projects as Projects, type ProjectType } from '@/lib/data.ts';
import Breadcrumb from '@/components/Layout/Breadcrumb';

const projectsList: ProjectType[] = Projects.sort((a: ProjectType, b: ProjectType) => {
	return (b.image != null ? 1 : 0) - (a.image != null ? 1 : 0);
});

const projects = () => {
	return (
		<>
			<SEO title="Projects | Purrquinox" />

			<Breadcrumb
				title="Our Projects"
				description="Explore our projects and see what we are working on."
			/>

			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{projectsList.map((project: ProjectType) => {
					return (
						<>
							<div className="mx-3 inline-grid self-auto">
								<ProjectCard
									name={project.name}
									description={project.description}
									image={project.image}
									link={project.link}
									flairs={project.tags}
								/>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default projects;

import SEO from '@/components/SEO/SEO';
import PageHeader from '@/components/Layout/PageHeader';
import { StaffMember, staffMembers } from '@/lib/data';
import StaffCard from '@/components/Cards/StaffCard';

const team = () => {
	return (
		<>
			<SEO title="Our Team | Purrquinox" />

			<PageHeader
				title="Our Team"
				description="Meet the talented individuals behind Purrquinox. We are a diverse group of passionate people dedicated to making a difference in the world of technology."
			/>

			<div className="flex items-center justify-center">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{staffMembers.map((member: StaffMember) => {
						return (
							<>
								<div className="mx-3 inline-grid self-auto">
									<StaffCard member={member} />
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default team;

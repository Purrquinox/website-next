'use client';
import Breadcrumb from '@/components/Layout/Breadcrumb';
import Meta from '@/components/SEO/SEO';
import { applications } from '@/lib/data';
import ApplyPosition from '@/components/Card/ApplyPosition';

const apply = () => {
	return (
		<>
			<Meta title="Staff Applications - Purrquinox" />

			<Breadcrumb
				title="Staff Applications"
				description="Our team is built on collaboration and shared passion, and we're always looking for dedicated individuals to join us. We value creativity, teamwork, and a drive to make a difference. If you're ready to bring your unique skills to the table, we’d love to hear from you!"
			/>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{applications.map((application) => (
					<>
						<div className="mx-3 inline-grid self-auto">
							<ApplyPosition application={application} />
						</div>
					</>
				))}
			</div>
		</>
	);
};

export default apply;

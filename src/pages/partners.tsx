import SEO from '@/components/SEO/SEO';
import PartnerCard from '@/components/Card/PartnerCard';
import { partners as list, PartnerType } from '@/lib/data.ts';
import Breadcrumb from '@/components/Layout/Breadcrumb';

const partnerList: PartnerType[] = list.sort((a: PartnerType, b: PartnerType) => {
	return (b.image != null ? 1 : 0) - (a.image != null ? 1 : 0);
});

const partners = () => {
	return (
		<>
			<SEO title="Partners | Purrquinox" />

			<Breadcrumb
				title="Our Partners"
				description="Explore our amazing partners who help us make Purrquinox a reality. We are grateful for their support and collaboration."
			/>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{partnerList.map((partner: PartnerType) => {
					return (
						<>
							<div className="mx-3 inline-grid self-auto">
								<PartnerCard partner={partner} />
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default partners;

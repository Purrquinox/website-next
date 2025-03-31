import SEO from '@/components/SEO/SEO';
import Breadcrumb from '@/components/Layout/Breadcrumb';

const team = () => {
	return (
		<>
			<SEO title="Our Team | Purrquinox" />

			<Breadcrumb
				title="Our Team"
				description="Meet the talented individuals behind Purrquinox. We are a diverse group of passionate people dedicated to making a difference in the world of technology."
			/>

			<p className="flex items-center justify-center">Could not connect with server!</p>
		</>
	);
};

export default team;

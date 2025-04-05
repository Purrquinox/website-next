import SEO from '@/components/SEO/SEO';
import PageHeader from '@/components/Layout/PageHeader';

const team = () => {
	return (
		<>
			<SEO title="Our Team | Purrquinox" />

			<PageHeader
				title="Our Team"
				description="Meet the talented individuals behind Purrquinox. We are a diverse group of passionate people dedicated to making a difference in the world of technology."
			/>

			<p className="flex items-center justify-center">Could not connect with server!</p>
		</>
	);
};

export default team;

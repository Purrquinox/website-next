import ErrorComp from '@/components/Layout/Error';
import SEO from '@/components/SEO/SEO';

const ErrorPage = () => {
	return (
		<>
			<SEO title="Page Not Found - Purrquinox" />
			<ErrorComp
				status={404}
				message="Page Not Found"
				subtext="The page you're looking for doesn't exist."
			/>
		</>
	);
};

export default ErrorPage;

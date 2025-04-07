'use client';
import { useEffect } from 'react';
import ErrorComp from '@/components/Layout/Error';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<ErrorComp
			status={500}
			message="Something went wrong"
			subtext="We're experiencing some technical difficulties. Please try again later."
			button={{
				label: 'Try Again',
				onClick: reset
			}}
		/>
	);
};

export default Error;

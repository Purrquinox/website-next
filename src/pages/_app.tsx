import '@/styles/globals.css';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const noMargin = ['/'];

	return (
		<div className="bg-background text-foreground">
			<div className="flex min-h-screen flex-col">
				<div className="grow">
					<Header />

					<main className={`${noMargin.includes(router.pathname) ? '' : 'mt-2'}`}>
						<Component {...pageProps} />
					</main>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default App;

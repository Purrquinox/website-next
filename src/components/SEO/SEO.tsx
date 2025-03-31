import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface MetaProps {
	title?: string;
	description?: string;
	logo?: string;
	image?: string;
}

const Meta = ({
	title = "Purrquinox | Delivering tomorrow's technology, today.",
	description = "Purrquinox is a small team with big ideas. We're all about solving problems, building cool stuff, and making a difference where it counts. No buzzwords, no nonsense—just a lot of hard work and a passion for what we do.",
	logo = '/logo.png',
	image = '/banner.png'
}: MetaProps) => {
	const router = useRouter();
	const [fullUrl, setFullUrl] = useState('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const url = `${window.location.protocol}//${window.location.host}${router.asPath}`;
			setFullUrl(url);
		}
	}, [router.asPath]);

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta
				name="keywords"
				content="purrquinox, antiraid, digital technology, sparkyflight, automation, innovation, technology"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{/* Open Graph Meta Tags */}
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content="Purrquinox" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			{fullUrl && <meta property="og:url" content={fullUrl} />}
			<meta property="og:image" content={logo} />
			<meta property="og:image:alt" content="Purrquinox" />
			<meta property="og:description" content={description} />
			<meta property="author" content="Purrquinox" />
			{image && <meta property="image" content={image} />}

			{/* Preload Assets */}
			<link rel="preload" href={logo} as="image" />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={logo} />
			<meta name="twitter:image:alt" content="Purrquinox Logo" />
			<meta name="twitter:site" content="@heypurrquinox" />

			{/* Mastodon Meta Tags */}
			<meta name="fediverse:creator" content="@purrquinox@mastodon.social" />
			<link rel="me" href="https://mastodon.social/@purrquinox" />

			{/* Favicon */}
			<link rel="icon" type="image/x-icon" href="/favicon.png" />

			{/* Theme Colors */}
			<meta name="theme-color" content="#710AF5" />
			<meta name="apple-mobile-web-app-status-bar" content="#710AF5" />

			{/* Sitemap */}
			<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
		</Head>
	);
};

export default Meta;

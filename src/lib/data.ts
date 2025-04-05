// Projects
interface SocialLink {
	platform: 'github' | 'twitter' | 'linkedin' | 'instagram' | 'website';
	url: string;
}

interface ProjectType {
	name: string;
	description: string;
	link: string;
	image: string | null;
	banner?: string | null;
	tags: string[];
	socials?: SocialLink[];
}

const projects: ProjectType[] = [
	{
		name: 'Sparkyflight',
		description:
			"Hey, neurodivergent friends! Tired of your thoughts being dismissed? Welcome to Sparkyflight – the virtual haven where your ideas soar without fear of judgment. Speak your mind, share your brilliance, and let's fly high together!",
		link: 'https://sparkyflight.xyz/',
		image: 'https://sparkyflight.xyz/logo.png',
		tags: ['SOCIAL MEDIA'],
		socials: [
			{
				platform: 'github',
				url: 'https://github.com/Sparkyflight'
			},
			{
				platform: 'twitter',
				url: 'https://x.com/sparkyflightapp'
			},
			{
				platform: 'website',
				url: 'https://sparkyflight.xyz/'
			}
		]
	},
	{
		name: 'AntiRaid',
		description:
			'AntiRaid is a Automatic Moderation Service created to protect your Discord Server from threats, unsafe bots and spamming using our advanced technology!',
		link: 'https://antiraid.xyz/',
		image: 'https://antiraid.xyz/logo.webp',
		tags: ['DISCORD'],
		socials: [
			{
				platform: 'github',
				url: 'https://github.com/Anti-Raid'
			},
			{
				platform: 'twitter',
				url: 'https://x.com/heyantiraid'
			},
			{
				platform: 'website',
				url: 'https://antiraid.xyz/'
			}
		]
	},
	{
		name: 'Luvix Social',
		description: 'Redefining Connection in a Seamless, Privacy-Focused World.',
		link: 'https://luvix.social/',
		image: 'https://luvix.social/logo.png',
		tags: ['Social Media'],
		socials: [
			{
				platform: 'github',
				url: 'https://github.com/LuvixSocial'
			},
			{
				platform: 'twitter',
				url: 'https://x.com/heyluvixsocial'
			},
			{
				platform: 'website',
				url: 'https://luvix.social/'
			}
		]
	},
	{
		name: 'Chlamydia',
		description: `Chlamydia is a comprehensive program designed to enhance the customization and personalization of your PC's RGB lighting and AIO cooler.`,
		link: 'https://github.com/Purrquinox/Chlamydia',
		image: null,
		tags: ['WINDOWS', 'LINUX', 'RGB']
	},
	{
		name: 'Bytepurr',
		description:
			'Bytepurr is a high-performance CDN microservice under Purrquinox, designed to handle file storage and retrieval efficiently. Built with Golang, it leverages MinIO or SeaweedFS for scalable object storage.',
		link: 'https://popkat.purrquinox.com/docs',
		image: null,
		tags: ['SeaweedFS', 'AWS S3', 'CDN']
	},
	{
		name: 'KonsoOS',
		description:
			'KonsoOS is a revolutionary system management web-based operating system developed by Purrquinox. It is designed to provide a seamless and efficient interface for managing systems, offering powerful tools for administration, monitoring, and automation.',
		link: 'https://github.com/Purrquinox/KonsoOS',
		image: null,
		tags: ['System Management', 'Linux']
	}
];

// Partners
interface PartnerType {
	name: string;
	description: string;
	link: string;
	image: string;
	banner?: string;
	flairs?: string[];
	socials?: SocialLink[];
}

const partners: PartnerType[] = [
	{
		name: 'Infinity List',
		description: 'Begin your Discord journey with our extensive directory.',
		link: 'https://infinitybots.gg/',
		image: 'https://cdn.infinitybots.gg/core/full_logo.webp',
		banner: 'https://cdn.infinitybots.gg/core/Infinity-Banner-Gradient.webp',
		flairs: ['Discord Bot List'],
		socials: [
			{
				platform: 'github',
				url: 'https://github.com/infinitybotlist'
			},
			{
				platform: 'twitter',
				url: 'https://x.com/heyinfinitybots'
			},
			{
				platform: 'website',
				url: 'https://infinitybots.gg/'
			}
		]
	}
];

// Export
export { projects, partners };
export type { ProjectType, PartnerType };

// Global Types
interface SocialLink {
	platform: 'github' | 'twitter' | 'linkedin' | 'instagram' | 'website';
	url: string;
}

// Projects
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

// Staff Applications
interface Application {
	title: string;
	description: string;
	benefits: { [key: string]: string };
	requirements: { [key: string]: string };
	faq: { [key: string]: string };
	fields: ApplicationField[];
}

interface ApplicationField {
	name: string;
	description: string;
	type: ApplicationFieldType;
	minLength: number | null;
	maxLength: number | null;
	pattern: RegExp | null;
	options: string[] | null;
	optional: boolean;
}

enum ApplicationFieldType {
	Text,
	TextBox,
	Number,
	Dropdown,
	Checkbox,
	Radio,
	Date,
	File,
	Markdown
}

const applications: Application[] = [
	{
		title: 'Software Engineer',
		description:
			"We're looking for a talented software engineer to join our team. Our team is focused on delivering cutting-edge technology, and we're looking for someone who can contribute to our mission and make a positive impact on our clients' businesses.",
		benefits: {
			'Strong technical skills':
				'Experience with modern software development technologies such as JavaScript, TypeScript, React, and Node.js.',
			'In-depth knowledge of cloud computing':
				'Familiarity with cloud platforms like AWS, GCP, or Azure.',
			'Experience with agile methodologies':
				'Familiarity with Scrum, Kanban, or other agile development methodologies.',
			'Experience with version control systems':
				'Familiarity with Git or other version control systems.'
		},
		requirements: {
			'Professional experience': 'At least 5 years of relevant software engineering experience.',
			'Strong communication skills':
				'Excellent written and verbal communication skills, and ability to work well in a team environment.',
			'Experience with modern software development tools':
				'Familiarity with tools like React, Angular, or Vue.js.'
		},
		faq: {
			'Can I apply for multiple positions?':
				"Yes, you can apply for multiple positions. However, please make sure that you're applying for the position that best aligns with your skills and interests.",
			"What if I'm not a software engineer?":
				"We're always interested in candidates who have a passion for technology and are excited about the future of work. If you're not a software engineer, we'd love to hear from you!"
		},
		fields: [
			{
				name: 'Name',
				description: 'Your full name.',
				type: ApplicationFieldType.Text,
				minLength: 2,
				maxLength: 50,
				pattern: /^[a-zA-Z\s]+$/,
				options: null,
				optional: false
			}
		]
	},
	{
		title: 'Product Manager',
		description:
			"We're looking for a highly motivated Product Manager to lead the development of innovative products. You will be responsible for defining product vision, strategy, and roadmaps, and collaborating with engineering and design teams to bring products to market.",
		benefits: {
			'Leadership opportunities':
				'Lead product teams and shape the future of our technology offerings.',
			'Cross-functional collaboration': 'Work with engineering, design, and marketing teams.',
			'Market impact': 'Drive product success and contribute to business growth.'
		},
		requirements: {
			Experience: 'At least 3 years of experience in product management or related roles.',
			'Analytical skills':
				'Ability to analyze market trends and user feedback to drive product decisions.',
			'Communication skills':
				'Strong verbal and written communication skills to align teams and stakeholders.'
		},
		faq: {
			'What industries do you work in?':
				'We focus on technology-driven industries, including SaaS, AI, and cloud computing.',
			'Is remote work available?': 'Yes, we offer flexible remote work options.'
		},
		fields: [
			{
				name: 'Name',
				description: 'Your full name.',
				type: ApplicationFieldType.Text,
				minLength: 2,
				maxLength: 50,
				pattern: /^[a-zA-Z\s]+$/,
				options: null,
				optional: false
			}
		]
	},
	{
		title: 'UX/UI Designer',
		description:
			"We're looking for a creative and user-centric UX/UI Designer to craft exceptional digital experiences. You'll work closely with product and engineering teams to design intuitive interfaces and improve user engagement.",
		benefits: {
			'Creative environment': 'Work on exciting and visually compelling projects.',
			'User impact': 'Shape how users interact with our products.',
			'Career growth': 'Opportunities for skill development and career advancement.'
		},
		requirements: {
			Portfolio: 'Strong portfolio showcasing UX/UI design work.',
			Tools: 'Proficiency with design tools like Figma, Sketch, or Adobe XD.',
			'User research': 'Experience with user testing and research methodologies.'
		},
		faq: {
			'What design tools do you use?': 'We primarily use Figma, Sketch, and Adobe Creative Suite.',
			'Is a design degree required?':
				'No, but strong experience and a solid portfolio are essential.'
		},
		fields: [
			{
				name: 'Name',
				description: 'Your full name.',
				type: ApplicationFieldType.Text,
				minLength: 2,
				maxLength: 50,
				pattern: /^[a-zA-Z\s]+$/,
				options: null,
				optional: false
			}
		]
	}
];

// Staff Members
interface StaffMember {
	name: string;
	username: string;
	roles: string[];
	image: string;
	socials?: SocialLink[];
}

const staffMembers: StaffMember[] = [
	{
		name: 'Select',
		username: 'selectdev',
		roles: ['Founder', 'CEO'],
		image: 'https://selectdev.me/logo.png',
		socials: [
			{
				platform: 'github',
				url: 'https://github.com/selectdev'
			}
		]
	},
	{
		name: 'Ilieff',
		username: 'scarlet_dev',
		roles: ['Owner of AntiRaid'],
		image: 'https://portfolio.antiraid.xyz/images/me.png',
		socials: [
			{
				platform: 'github',
				url: 'https://github.com/whiteewolf'
			}
		]
	},
	{
		name: 'Maya',
		username: 'ranveersoni',
		roles: ['Lead Frontend Developer'],
		image: 'https://maya25-me.vercel.app/_next/image?url=%2Ficon.png&w=640&q=75',
		socials: [
			{
				platform: 'twitter',
				url: 'https://x.com/ranveersoni98'
			},
			{
				platform: 'github',
				url: 'https://github.com/Miya25'
			}
		]
	},
	{
		name: 'Toxic Dev',
		username: 'therealtoxicdev',
		roles: ['Supervisor'],
		image: 'https://toxicdev.me/logo.png',
		socials: [
			{
				platform: 'github',
				url: 'https://github.com/therealtoxicdev'
			},
			{
				platform: 'twitter',
				url: 'https://x.com/therealtoxicdev'
			},
			{
				platform: 'website',
				url: 'https://toxicdev.me/'
			},
			{
				platform: 'linkedin',
				url: 'https://www.linkedin.com/in/TheRealToxicDev'
			}
		]
	}
];

// Export
export { projects, partners, applications, staffMembers };
export type {
	ProjectType,
	PartnerType,
	Application,
	ApplicationField,
	ApplicationFieldType,
	StaffMember
};

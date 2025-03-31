'use client';
import Breadcrumb from '@/components/Layout/Breadcrumb';
import Meta from '@/components/SEO/SEO';
import Card from '@/components/Layout/Card';

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
	}
];

const apply = () => {
	return (
		<main className="p-6">
			<Meta title="Staff Applications - Purrquinox" />

			<Breadcrumb
				title="Staff Applications"
				description="Our team is built on collaboration and shared passion, and we're always looking for dedicated individuals to join us. We value creativity, teamwork, and a drive to make a difference. If you're ready to bring your unique skills to the table, we’d love to hear from you!"
			/>

			{applications.map((application, index) => (
				<div key={index}>
					<Card
						name={application.title}
						description={application.description}
						image={null}
						link={null}
					/>
					<div className="p-2" />
				</div>
			))}
		</main>
	);
};

export default apply;

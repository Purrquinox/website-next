'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ShadCN/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ShadCN/card';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@/components/ShadCN/collapsible';
import { Badge } from '@/components/ShadCN/badge';
import { type Application } from '@/lib/data';

interface StaffApplicationCardProps {
	application: Application;
}

const ApplyPosition = ({ application }: StaffApplicationCardProps) => {
	const [openSections, setOpenSections] = useState({
		benefits: false,
		requirements: false,
		faq: false
	});

	const toggleSection = (section: keyof typeof openSections) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section]
		}));
	};

	const requiredFieldsCount = application.fields.filter((field) => !field.optional).length;

	return (
		<Card className="mx-auto w-full max-w-3xl">
			<CardHeader>
				<div className="flex items-start justify-between">
					<div>
						<CardTitle className="text-2xl font-bold">{application.title}</CardTitle>
						<CardDescription className="mt-2">{application.description}</CardDescription>
					</div>
					<Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
						Open Position
					</Badge>
				</div>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Benefits Section */}
				<Collapsible
					open={openSections.benefits}
					onOpenChange={() => toggleSection('benefits')}
					className="rounded-lg border"
				>
					<CollapsibleTrigger asChild>
						<div className="flex cursor-pointer items-center justify-between p-4 hover:bg-muted">
							<h3 className="flex items-center text-lg font-medium">
								<CheckCircle className="mr-2 h-5 w-5 text-green-500" />
								Benefits
							</h3>
							{openSections.benefits ? (
								<ChevronUp className="h-5 w-5 text-muted-foreground" />
							) : (
								<ChevronDown className="h-5 w-5 text-muted-foreground" />
							)}
						</div>
					</CollapsibleTrigger>
					<CollapsibleContent className="px-4 pb-4">
						<ul className="space-y-2">
							{Object.entries(application.benefits).map(([title, description]) => (
								<li key={title} className="border-t pt-2">
									<div className="font-medium">{title}</div>
									<div className="text-sm text-muted-foreground">{description}</div>
								</li>
							))}
						</ul>
					</CollapsibleContent>
				</Collapsible>

				{/* Requirements Section */}
				<Collapsible
					open={openSections.requirements}
					onOpenChange={() => toggleSection('requirements')}
					className="rounded-lg border"
				>
					<CollapsibleTrigger asChild>
						<div className="flex cursor-pointer items-center justify-between p-4 hover:bg-muted">
							<h3 className="flex items-center text-lg font-medium">
								<AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
								Requirements
							</h3>
							{openSections.requirements ? (
								<ChevronUp className="h-5 w-5 text-muted-foreground" />
							) : (
								<ChevronDown className="h-5 w-5 text-muted-foreground" />
							)}
						</div>
					</CollapsibleTrigger>
					<CollapsibleContent className="px-4 pb-4">
						<ul className="space-y-2">
							{Object.entries(application.requirements).map(([title, description]) => (
								<li key={title} className="border-t pt-2">
									<div className="font-medium">{title}</div>
									<div className="text-sm text-muted-foreground">{description}</div>
								</li>
							))}
						</ul>
					</CollapsibleContent>
				</Collapsible>

				{/* FAQ Section */}
				<Collapsible
					open={openSections.faq}
					onOpenChange={() => toggleSection('faq')}
					className="rounded-lg border"
				>
					<CollapsibleTrigger asChild>
						<div className="flex cursor-pointer items-center justify-between p-4 hover:bg-muted">
							<h3 className="text-lg font-medium">Frequently Asked Questions</h3>
							{openSections.faq ? (
								<ChevronUp className="h-5 w-5 text-muted-foreground" />
							) : (
								<ChevronDown className="h-5 w-5 text-muted-foreground" />
							)}
						</div>
					</CollapsibleTrigger>
					<CollapsibleContent className="px-4 pb-4">
						<ul className="space-y-2">
							{Object.entries(application.faq).map(([question, answer]) => (
								<li key={question} className="border-t pt-2">
									<div className="font-medium">{question}</div>
									<div className="text-sm text-muted-foreground">{answer}</div>
								</li>
							))}
						</ul>
					</CollapsibleContent>
				</Collapsible>

				{/* Application Fields Summary */}
				<div className="mt-6 rounded-lg bg-muted p-4">
					<h3 className="mb-2 text-lg font-medium">Application Details</h3>
					<div className="flex flex-wrap gap-2">
						<div className="text-sm">
							<span className="font-medium">{application.fields.length}</span> fields to complete
						</div>
						<div className="text-sm">
							<span className="font-medium">{requiredFieldsCount}</span> required fields
						</div>
						<div className="text-sm">
							<span className="font-medium">{application.fields.length - requiredFieldsCount}</span>{' '}
							optional fields
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between border-t pt-6">
				<Button variant="outline">Save for Later</Button>
				<Button>Apply Now</Button>
			</CardFooter>
		</Card>
	);
};

export default ApplyPosition;

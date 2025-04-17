'use client';

import { useState } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ShadCN/card';
import { Button } from '@/components/ShadCN/button';
import { Label } from '@/components/ShadCN/label';
import { Switch } from '@/components/ShadCN/switch';
import { toast } from '@/hooks/use-toast';

const CookiePreferences = () => {
	const [preferences, setPreferences] = useState({
		necessary: true,
		functional: false,
		analytics: false,
		targeting: false
	});

	const handleToggle = (cookieType: keyof typeof preferences) => {
		if (cookieType === 'necessary') return; // Can't toggle necessary cookies

		setPreferences((prev) => ({
			...prev,
			[cookieType]: !prev[cookieType]
		}));
	};

	const savePreferences = async () => {
		// Here you would implement the actual cookie saving logic
		// For example, using the cookies API in Next.js

		toast({
			title: 'Cookie preferences saved',
			description: 'Your cookie preferences have been updated successfully.'
		});
	};

	return (
		<Card className="mt-8 w-full">
			<CardHeader>
				<CardTitle className="text-xl text-red-500">Cookie Preferences</CardTitle>
				<CardDescription>
					Customize your cookie preferences below. Note that strictly necessary cookies cannot be
					disabled.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-center justify-between space-x-2">
					<Label
						htmlFor="necessary"
						className="flex cursor-not-allowed flex-col space-y-1 opacity-80"
					>
						<span className="font-medium">Strictly Necessary</span>
						<span className="text-xs font-normal text-muted-foreground">
							These cookies are essential for the website to function properly.
						</span>
					</Label>
					<Switch id="necessary" checked={preferences.necessary} disabled={true} />
				</div>

				<div className="flex items-center justify-between space-x-2">
					<Label
						htmlFor="functional"
						className="flex cursor-pointer flex-col space-y-1"
						onClick={() => handleToggle('functional')}
					>
						<span className="font-medium">Functionality</span>
						<span className="text-xs font-normal text-muted-foreground">
							These cookies enable personalized features and functionality.
						</span>
					</Label>
					<Switch
						id="functional"
						checked={preferences.functional}
						onCheckedChange={() => handleToggle('functional')}
					/>
				</div>

				<div className="flex items-center justify-between space-x-2">
					<Label
						htmlFor="analytics"
						className="flex cursor-pointer flex-col space-y-1"
						onClick={() => handleToggle('analytics')}
					>
						<span className="font-medium">Analytics & Performance</span>
						<span className="text-xs font-normal text-muted-foreground">
							These cookies help us understand how visitors interact with our website.
						</span>
					</Label>
					<Switch
						id="analytics"
						checked={preferences.analytics}
						onCheckedChange={() => handleToggle('analytics')}
					/>
				</div>

				<div className="flex items-center justify-between space-x-2">
					<Label
						htmlFor="targeting"
						className="flex cursor-pointer flex-col space-y-1"
						onClick={() => handleToggle('targeting')}
					>
						<span className="font-medium">Targeting & Advertising</span>
						<span className="text-xs font-normal text-muted-foreground">
							These cookies are used to deliver relevant ads and marketing campaigns.
						</span>
					</Label>
					<Switch
						id="targeting"
						checked={preferences.targeting}
						onCheckedChange={() => handleToggle('targeting')}
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button onClick={savePreferences} className="w-full bg-red-500 text-white hover:bg-red-600">
					Save Preferences
				</Button>
			</CardFooter>
		</Card>
	);
};

export default CookiePreferences;

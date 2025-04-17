import TOCGenerator from '@/components/Other/toc-generator';
import { Card } from '@/components/ShadCN/card';
import { Separator } from '@/components/ShadCN/separator';
import { Button } from '@/components/ShadCN/button';
import SEO from '@/components/SEO/SEO';
import Link from 'next/link';

const Privacy = () => {
	return (
		<>
			<SEO title="Privacy Policy - Purrquinox" />

			<div className="container mx-auto px-4 py-10 md:px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-12">
					{/* Table of Contents - Sticky on desktop */}
					<div className="h-fit md:sticky md:top-20 md:col-span-3 md:self-start">
						<TOCGenerator containerSelector="#privacy-content" accentColor="red" />
					</div>

					{/* Main Content */}
					<div className="md:col-span-9">
						<Card className="p-6 md:p-8" id="privacy-content">
							<div className="space-y-8">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tight text-red-500 md:text-4xl">
										Purrquinox Privacy Policy
									</h1>
									<p className="text-sm text-muted-foreground">Last updated: April 15, 2025</p>
								</div>

								<Separator />

								<section id="introduction" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">1. Introduction</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Your privacy is important to Purrquinox. It is our policy to respect your
											privacy regarding any information we may collect from you on purrquinox.com.
										</p>
										<p>
											We only ask for personal information when we truly need it to provide a
											service to you. We collect it by fair and lawful means, with your knowledge
											and consent. We also let you know why we're collecting it and how it will be
											used.
										</p>
									</div>
								</section>

								<Separator />

								<section id="information-we-collect" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										2. Information We Collect
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											When you visit purrquinox.com, we may collect the following types of
											information:
										</p>
										<ul className="list-disc space-y-2 pl-6">
											<li>
												<span className="font-medium text-foreground">Personal Information:</span>{' '}
												This includes your name, email address, phone number, and other similar
												contact data.
											</li>
											<li>
												<span className="font-medium text-foreground">Account Information:</span>{' '}
												This includes your username, password, and security questions.
											</li>
											<li>
												<span className="font-medium text-foreground">Payment Information:</span> If
												you make purchases, we collect payment details, billing address, and other
												information necessary to process the transaction.
											</li>
											<li>
												<span className="font-medium text-foreground">Usage Data:</span> We collect
												information about how you interact with purrquinox.com, including the pages
												you visit, the time you spend on those pages, and other diagnostic data.
											</li>
										</ul>
									</div>
								</section>

								<Separator />

								<section id="how-we-use-information" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										3. How We Use Your Information
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>Purrquinox uses the information we collect in various ways, including to:</p>
										<ul className="list-disc space-y-2 pl-6">
											<li>Provide, operate, and maintain purrquinox.com</li>
											<li>Improve, personalize, and expand our Services</li>
											<li>Understand and analyze how you use our Services</li>
											<li>Develop new products, services, features, and functionality</li>
											<li>
												Communicate with you, either directly or through one of our partners,
												including for customer service, to provide you with updates and other
												information relating to purrquinox.com, and for marketing and promotional
												purposes
											</li>
											<li>Send you emails</li>
											<li>Find and prevent fraud</li>
										</ul>
									</div>
								</section>

								<Separator />

								<section id="data-retention" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">4. Data Retention</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Purrquinox will retain your personal information only for as long as is
											necessary for the purposes set out in this Privacy Policy. We will retain and
											use your information to the extent necessary to comply with our legal
											obligations, resolve disputes, and enforce our policies.
										</p>
									</div>
								</section>

								<Separator />

								<section id="data-transfer" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">5. Data Transfer</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Your information, including personal information, may be transferred to — and
											maintained on — computers located outside of your state, province, country or
											other governmental jurisdiction where the data protection laws may differ from
											those of your jurisdiction.
										</p>
										<p>
											If you are located outside the United States and choose to provide information
											to purrquinox.com, please note that we transfer the data, including personal
											information, to the United States and process it there.
										</p>
									</div>
								</section>

								<Separator />

								<section id="your-rights" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">6. Your Rights</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											If you are a resident of the European Economic Area (EEA), you have certain
											data protection rights. Purrquinox aims to take reasonable steps to allow you
											to correct, amend, delete, or limit the use of your personal information.
										</p>
										<p>
											If you wish to be informed about what personal information we hold about you
											and if you want it to be removed from our systems, please contact us.
										</p>
										<p>In certain circumstances, you have the following data protection rights:</p>
										<ul className="list-disc space-y-2 pl-6">
											<li>The right to access, update or delete the information we have on you</li>
											<li>The right of rectification</li>
											<li>The right to object</li>
											<li>The right of restriction</li>
											<li>The right to data portability</li>
											<li>The right to withdraw consent</li>
										</ul>
									</div>
								</section>

								<Separator />

								<section id="cookies" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">7. Cookies</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Cookies are small pieces of data stored on your device (computer or mobile
											device). Purrquinox uses cookies to collect information and improve our
											Services. You can instruct your browser to refuse all cookies or to indicate
											when a cookie is being sent. However, if you do not accept cookies, you may
											not be able to use some portions of purrquinox.com.
										</p>
										<p className="flex items-center gap-2">
											For more information about the cookies we use, please see our{' '}
											<Link
												href="/cookie-policy"
												className="text-red-500 underline-offset-4 hover:text-red-600 hover:underline"
											>
												Cookie Policy
											</Link>
											.
										</p>
									</div>
								</section>

								<Separator />

								<section id="changes-to-policy" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										8. Changes to This Privacy Policy
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											We may update our Privacy Policy from time to time. We will notify you of any
											changes by posting the new Privacy Policy on purrquinox.com.
										</p>
										<p>
											You are advised to review this Privacy Policy periodically for any changes.
											Changes to this Privacy Policy are effective when they are posted on this
											page.
										</p>
									</div>
								</section>

								<Separator />

								<section id="contact-us" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">9. Contact Us</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											If you have any questions about this Privacy Policy, please contact us at:
										</p>
										<div className="flex items-center">
											<Button
												variant="outline"
												className="text-red-500 hover:bg-red-50 hover:text-red-600"
											>
												<Link href="mailto:legal@purrquinox.com">legal@purrquinox.com</Link>
											</Button>
										</div>
									</div>
								</section>

								<Separator className="my-8" />

								<div className="flex flex-col justify-between gap-4 sm:flex-row">
									<Button
										variant="outline"
										className="text-red-500 hover:bg-red-50 hover:text-red-600"
									>
										<Link href="/terms">Terms of Service</Link>
									</Button>
									<Button
										variant="outline"
										className="text-red-500 hover:bg-red-50 hover:text-red-600"
									>
										<Link href="/cookie">Cookie Policy</Link>
									</Button>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default Privacy;

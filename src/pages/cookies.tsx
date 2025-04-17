import TOCGenerator from '@/components/Other/toc-generator';
import { Card } from '@/components/ShadCN/card';
import { Separator } from '@/components/ShadCN/separator';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ShadCN/button';
import CookiePreferences from '@/components/Other/cookie-preferences';
import SEO from '@/components/SEO/SEO';

const Cookies = () => {
	return (
		<>
			<SEO title="Cookie Policy - Purrquinox" />

			<div className="container mx-auto px-4 py-10 md:px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-12">
					{/* Table of Contents - Sticky on desktop */}
					<div className="h-fit md:sticky md:top-20 md:col-span-3 md:self-start">
						<TOCGenerator containerSelector="#cookie-policy-content" accentColor="red" />
					</div>

					{/* Main Content */}
					<div className="md:col-span-9">
						<Card className="p-6 md:p-8" id="cookie-policy-content">
							<div className="space-y-8">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tight text-red-500 md:text-4xl">
										Purrquinox Cookie Policy
									</h1>
									<p className="text-sm text-muted-foreground">Last updated: April 15, 2025</p>
								</div>

								<Separator />

								<section id="what-are-cookies" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										1. What Are Cookies
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Cookies are small pieces of text sent to your web browser by a website you
											visit. A cookie file is stored in your web browser and allows the Service or a
											third-party to recognize you and make your next visit easier and the Service
											more useful to you.
										</p>
										<p>
											Cookies can be "persistent" or "session" cookies. Persistent cookies remain on
											your personal computer or mobile device when you go offline, while session
											cookies are deleted as soon as you close your web browser.
										</p>
									</div>
								</section>

								<Separator />

								<section id="how-we-use-cookies" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										2. How Purrquinox Uses Cookies
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											When you use and access purrquinox.com, we may place a number of cookie files
											in your web browser.
										</p>
										<p>We use cookies for the following purposes:</p>
										<ul className="list-disc space-y-2 pl-6">
											<li>
												<span className="font-medium text-foreground">Essential cookies:</span>{' '}
												These are cookies that are required for the operation of purrquinox.com.
												They include, for example, cookies that enable you to log into secure areas
												of our website.
											</li>
											<li>
												<span className="font-medium text-foreground">
													Analytical/performance cookies:
												</span>{' '}
												They allow us to recognize and count the number of visitors and to see how
												visitors move around purrquinox.com when they are using it. This helps us to
												improve the way our website works, for example, by ensuring that users are
												finding what they are looking for easily.
											</li>
											<li>
												<span className="font-medium text-foreground">Functionality cookies:</span>{' '}
												These are used to recognize you when you return to purrquinox.com. This
												enables us to personalize our content for you, greet you by name and
												remember your preferences (for example, your choice of language or region).
											</li>
											<li>
												<span className="font-medium text-foreground">Targeting cookies:</span>{' '}
												These cookies record your visit to purrquinox.com, the pages you have
												visited and the links you have followed. We will use this information to
												make our website and the advertising displayed on it more relevant to your
												interests.
											</li>
										</ul>
									</div>
								</section>

								<Separator />

								<section id="types-of-cookies" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										3. Types of Cookies We Use
									</h2>
									<div className="space-y-6 text-muted-foreground">
										<div>
											<h3
												id="strictly-necessary"
												className="mb-2 scroll-mt-20 text-xl font-medium text-foreground"
											>
												3.1 Strictly Necessary Cookies
											</h3>
											<p>
												These cookies are essential to provide you with services available through
												purrquinox.com and to enable you to use some of its features. Without these
												cookies, the services that you have asked for cannot be provided, and we
												only use these cookies to provide you with those services.
											</p>
										</div>
										<div>
											<h3
												id="functionality"
												className="mb-2 scroll-mt-20 text-xl font-medium text-foreground"
											>
												3.2 Functionality Cookies
											</h3>
											<p>
												These cookies allow purrquinox.com to remember choices you make when you use
												our website. The purpose of these cookies is to provide you with a more
												personal experience and to avoid you having to re-enter your preferences
												every time you visit our website.
											</p>
										</div>
										<div>
											<h3
												id="analytics"
												className="mb-2 scroll-mt-20 text-xl font-medium text-foreground"
											>
												3.3 Analytics and Performance Cookies
											</h3>
											<p>
												These cookies are used to track information about traffic to purrquinox.com
												and how users use our website. The information gathered via these cookies
												may directly or indirectly identify you as an individual visitor. This is
												because the information collected is typically linked to a pseudonymous
												identifier associated with the device you use to access our website. We may
												also use these cookies to test new pages, features or new functionality of
												the website to see how our users react to them.
											</p>
										</div>
										<div>
											<h3
												id="targeting"
												className="mb-2 scroll-mt-20 text-xl font-medium text-foreground"
											>
												3.4 Targeting and Advertising Cookies
											</h3>
											<p>
												These cookies track your browsing habits to enable us to show advertising
												which is more likely to be of interest to you. These cookies use information
												about your browsing history to group you with other users who have similar
												interests. Based on that information, and with our permission, third-party
												advertisers can place cookies to enable them to show adverts which we think
												will be relevant to your interests while you are on third-party websites.
											</p>
										</div>
									</div>
								</section>

								<Separator />

								<section id="managing-cookies" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										4. Managing Cookies
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Most browsers allow you to refuse to accept cookies and to delete cookies. The
											methods for doing so vary from browser to browser, and from version to
											version. You can however obtain up-to-date information about blocking and
											deleting cookies via these links:
										</p>
										<ul className="space-y-2">
											{[
												{
													name: 'Google Chrome',
													url: 'https://support.google.com/chrome/answer/95647'
												},
												{
													name: 'Mozilla Firefox',
													url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences'
												},
												{
													name: 'Apple Safari',
													url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac'
												},
												{
													name: 'Microsoft Internet Explorer',
													url: 'https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies'
												},
												{
													name: 'Microsoft Edge',
													url: 'https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies'
												}
											].map((browser, index) => (
												<li key={index} className="flex items-center">
													<ChevronRight className="mr-2 h-4 w-4 text-red-500" />
													<Link
														href={browser.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-red-500 transition-colors hover:text-red-600 hover:underline"
													>
														{browser.name}
													</Link>
												</li>
											))}
										</ul>
										<p>
											Please note that blocking cookies may have a negative impact on the functions
											of purrquinox.com. Some features of the Site may cease to be available to you.
										</p>
									</div>
								</section>

								<Separator />

								<section id="your-choices" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										5. Your Choices Regarding Cookies
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											If you'd like to delete cookies or instruct your web browser to delete or
											refuse cookies, please visit the help pages of your web browser.
										</p>
										<p>
											Please note, however, that if you delete cookies or refuse to accept them, you
											might not be able to use all of the features of purrquinox.com, you may not be
											able to store your preferences, and some of our pages might not display
											properly.
										</p>
									</div>
								</section>

								<Separator />

								<section id="changes" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										6. Changes to This Cookie Policy
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											We may update our Cookie Policy from time to time. We will notify you of any
											changes by posting the new Cookie Policy on purrquinox.com.
										</p>
										<p>
											You are advised to review this Cookie Policy periodically for any changes.
											Changes to this Cookie Policy are effective when they are posted on this page.
										</p>
									</div>
								</section>

								<Separator />

								<section id="contact-us" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">7. Contact Us</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>If you have any questions about our Cookie Policy, please contact us at:</p>
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
							</div>

							<CookiePreferences />
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cookies;

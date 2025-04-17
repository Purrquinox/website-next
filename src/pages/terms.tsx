import TOCGenerator from '@/components/Other/toc-generator';
import { Card } from '@/components/ShadCN//card';
import { Separator } from '@/components/ShadCN/separator';
import { Button } from '@/components/ShadCN/button';
import SEO from '@/components/SEO/SEO';
import Link from 'next/link';

const Terms = () => {
	return (
		<>
			<SEO title="Terms of Service - Purrquinox" />

			<div className="container mx-auto px-4 py-10 md:px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-12">
					{/* Table of Contents - Sticky on desktop */}
					<div className="h-fit md:sticky md:top-20 md:col-span-3 md:self-start">
						<TOCGenerator containerSelector="#terms-content" accentColor="red" />
					</div>

					{/* Main Content */}
					<div className="md:col-span-9">
						<Card className="p-6 md:p-8" id="terms-content">
							<div className="space-y-8">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tight text-red-500 md:text-4xl">
										Purrquinox Terms of Service
									</h1>
									<p className="text-sm text-muted-foreground">Last updated: April 15, 2025</p>
								</div>

								<Separator />

								<section id="introduction" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">1. Introduction</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Welcome to Purrquinox. These Terms of Service ("Terms") govern your access to
											and use of purrquinox.com (the "Website") and its services (collectively, the
											"Services").
										</p>
										<p>
											By accessing or using purrquinox.com, you agree to be bound by these Terms. If
											you disagree with any part of the Terms, you may not access the Services.
										</p>
									</div>
								</section>

								<Separator />

								<section id="use-of-services" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										2. Use of Services
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Our Services are intended for users who are at least 18 years of age. By using
											purrquinox.com, you represent and warrant that you are at least 18 years old
											and that your use of the Services does not violate any applicable law or
											regulation.
										</p>
										<p>
											You are responsible for maintaining the confidentiality of your account and
											password and for restricting access to your computer. You agree to accept
											responsibility for all activities that occur under your account.
										</p>
									</div>
								</section>

								<Separator />

								<section id="content" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">3. Content</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Purrquinox.com allows you to post, link, store, share and otherwise make
											available certain information, text, graphics, videos, or other material
											("Content"). You are responsible for the Content that you post on or through
											the Services, including its legality, reliability, and appropriateness.
										</p>
										<p>
											By posting Content on or through purrquinox.com, you represent and warrant
											that: (i) the Content is yours (you own it) or you have the right to use it
											and grant us the rights and license as provided in these Terms, and (ii) the
											posting of your Content on or through the Services does not violate the
											privacy rights, publicity rights, copyrights, contract rights or any other
											rights of any person.
										</p>
									</div>
								</section>

								<Separator />

								<section id="intellectual-property" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										4. Intellectual Property
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											Purrquinox.com and its original content (excluding Content provided by users),
											features, and functionality are and will remain the exclusive property of
											Purrquinox and its licensors. The Services are protected by copyright,
											trademark, and other laws. Our trademarks and trade dress may not be used in
											connection with any product or service without the prior written consent of
											Purrquinox.
										</p>
									</div>
								</section>

								<Separator />

								<section id="termination" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">5. Termination</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											We may terminate or suspend your account and bar access to purrquinox.com
											immediately, without prior notice or liability, under our sole discretion, for
											any reason whatsoever and without limitation, including but not limited to a
											breach of the Terms.
										</p>
										<p>
											If you wish to terminate your account, you may simply discontinue using the
											Services, or notify us that you wish to delete your account.
										</p>
									</div>
								</section>

								<Separator />

								<section id="limitation-of-liability" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										6. Limitation of Liability
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											In no event shall Purrquinox, nor its directors, employees, partners, agents,
											suppliers, or affiliates, be liable for any indirect, incidental, special,
											consequential or punitive damages, including without limitation, loss of
											profits, data, use, goodwill, or other intangible losses, resulting from (i)
											your access to or use of or inability to access or use purrquinox.com; (ii)
											any conduct or content of any third party on the Services; (iii) any content
											obtained from the Services; and (iv) unauthorized access, use or alteration of
											your transmissions or content, whether based on warranty, contract, tort
											(including negligence) or any other legal theory, whether or not we have been
											informed of the possibility of such damage.
										</p>
									</div>
								</section>

								<Separator />

								<section id="changes-to-terms" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">
										7. Changes to Terms
									</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											We reserve the right, at our sole discretion, to modify or replace these Terms
											at any time. If a revision is material, we will provide at least 30 days'
											notice prior to any new terms taking effect. What constitutes a material
											change will be determined at our sole discretion.
										</p>
										<p>
											By continuing to access or use purrquinox.com after any revisions become
											effective, you agree to be bound by the revised terms. If you do not agree to
											the new terms, you are no longer authorized to use the Services.
										</p>
									</div>
								</section>

								<Separator />

								<section id="governing-law" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">8. Governing Law</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>
											These Terms shall be governed and construed in accordance with the laws of the
											United States, without regard to its conflict of law provisions.
										</p>
										<p>
											Our failure to enforce any right or provision of these Terms will not be
											considered a waiver of those rights. If any provision of these Terms is held
											to be invalid or unenforceable by a court, the remaining provisions of these
											Terms will remain in effect.
										</p>
									</div>
								</section>

								<Separator />

								<section id="contact-us" className="scroll-mt-20">
									<h2 className="mb-4 text-2xl font-semibold text-red-500/90">9. Contact Us</h2>
									<div className="space-y-4 text-muted-foreground">
										<p>If you have any questions about these Terms, please contact us at:</p>
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
										<Link href="/cookies">Cookie Policy</Link>
									</Button>
									<Button
										variant="outline"
										className="text-red-500 hover:bg-red-50 hover:text-red-600"
									>
										<Link href="/privacy">Privacy Policy</Link>
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

export default Terms;

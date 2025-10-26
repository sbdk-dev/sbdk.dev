'use client'

import { Check, Github, ArrowRight, Sparkles, Building2, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const tiers = [
    {
      name: 'Open Source',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for individual developers and small teams',
      icon: Github,
      features: [
        'Full CLI toolkit',
        'DLT, dbt, DuckDB integration',
        'Unlimited projects',
        'Unlimited data processing',
        'Local development',
        'Community support',
        'GitHub wiki access',
        'MIT License',
      ],
      cta: 'Get Started',
      ctaLink: 'https://github.com/sbdk-dev/sbdk-dev',
      highlighted: false,
      available: true,
    },
    {
      name: 'Team',
      price: 'Coming Soon',
      period: '',
      description: 'Collaborate with your data team',
      icon: Sparkles,
      features: [
        'Everything in Open Source',
        'Team collaboration features',
        'Shared pipeline templates',
        'Version control integration',
        'Priority email support',
        'Advanced monitoring',
        'Usage analytics dashboard',
        'SSO integration',
      ],
      cta: 'Join Waitlist',
      ctaLink: '#waitlist',
      highlighted: true,
      available: false,
      badge: 'Coming Q2 2025',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific needs',
      icon: Building2,
      features: [
        'Everything in Team',
        'Dedicated support',
        'Custom SLAs',
        'On-premise deployment',
        'Advanced security features',
        'Audit logging',
        'Custom integrations',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      ctaLink: 'mailto:sales@sbdk.dev',
      highlighted: false,
      available: false,
      badge: 'Coming Soon',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold">SBDK.dev</span>
            </Link>

            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Start Free, <span className="gradient-text">Scale When Ready</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            SBDK.dev is open source and free forever. Upcoming team and enterprise features for when you need them.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => {
              const Icon = tier.icon
              return (
                <div
                  key={idx}
                  className={`relative p-8 rounded-2xl ${
                    tier.highlighted
                      ? 'bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-blue-950 dark:via-purple-950 dark:to-blue-950 border-2 border-primary-500 shadow-2xl scale-105'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  } ${!tier.available ? 'opacity-90' : ''}`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="px-4 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold rounded-full">
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className={`w-12 h-12 ${tier.highlighted ? 'text-primary-700 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400'}`} />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{tier.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-bold">{tier.price}</div>
                    {tier.period && (
                      <div className="text-gray-600 dark:text-gray-400">{tier.period}</div>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={tier.ctaLink}
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors mb-8 ${
                      tier.highlighted
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : tier.available
                        ? 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={(e) => {
                      if (!tier.available && tier.ctaLink === '#waitlist') {
                        e.preventDefault()
                      }
                    }}
                  >
                    {tier.cta}
                    {tier.available && <ArrowRight className="inline-block ml-2 w-4 h-4" />}
                  </Link>

                  {/* Features */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Will the open source version always be free?',
                a: 'Yes! SBDK.dev core is MIT licensed and will always be free and open source. We believe in open source and want to provide the best local-first data pipeline toolkit to everyone.',
              },
              {
                q: 'What will the Team tier include?',
                a: 'The Team tier will add collaboration features like shared pipeline templates, team dashboards, advanced monitoring, and priority support. It\'s designed for teams that want to standardize their data pipelines across multiple developers.',
              },
              {
                q: 'When will Team and Enterprise tiers launch?',
                a: 'We\'re planning to launch Team tier in Q2 2025 and Enterprise features shortly after. Join our waitlist to be notified when they become available.',
              },
              {
                q: 'Can I use SBDK.dev for commercial projects?',
                a: 'Absolutely! SBDK.dev is MIT licensed, which means you can use it freely for commercial projects without any restrictions.',
              },
              {
                q: 'Do I need to upgrade to use SBDK.dev in production?',
                a: 'No, the open source version is production-ready. The paid tiers will add team collaboration, enhanced support, and enterprise features - but the core functionality will always be available for free.',
              },
              {
                q: 'Will there be cloud deployment options?',
                a: 'We\'re exploring cloud deployment options for the Enterprise tier while maintaining the local-first philosophy. The core open source version will always support local and self-hosted deployment.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Want Early Access to <span className="gradient-text">Team Features?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join our waitlist and be the first to know when Team tier launches
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For now, star us on GitHub to stay updated on all new features:
            </p>
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary-600" />
              <span className="font-bold text-lg">SBDK.dev</span>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 SBDK. Open Source.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

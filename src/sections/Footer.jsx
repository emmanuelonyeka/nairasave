import { HiMail } from 'react-icons/hi'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Security', href: '#trust' },
    { label: 'Benefits', href: '#benefits' },
  ],
  Company: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Join Waitlist', href: '#waitlist' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="bg-gray-50 dark:bg-secondary border-t border-gray-500 dark:border-secondary-800"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-display font-bold text-xl text-secondary-700 dark:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-label="NairaSave home"
            >
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
            N$
          </span>
          <span>
            Naira<span className="text-primary">Save</span>
          </span>
            </a>
            <p className="text-sm text-secondary-700 dark:text-gray-400 leading-relaxed max-w-xs mb-5">
              The smart way for Nigerians to save in USD, beat inflation, and build lasting wealth—one dollar at a time.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { Icon: FaTwitter, label: 'Twitter', href: '#' },
                { Icon: FaInstagram, label: 'Instagram', href: '#' },
                { Icon: FaLinkedin, label: 'LinkedIn', href: '#' },
                { Icon: HiMail, label: 'Email us', href: 'mailto:hello@nairasave.ng' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg  dark:bg-secondary-800 flex items-center justify-center text-secondary-700 hover:bg-secondary-800 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav key={heading} aria-label={`${heading} links`}>
              <h3 className="text-secondary-800 dark:text-white font-semibold text-sm mb-4">{heading}</h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }}
                      className="text-sm text-secondary-700 dark:text-gray-400 hover:text-primary transition-colors duration-150 focus:outline-none focus:underline focus:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-secondary-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-700 dark:text-gray-500">
            © {new Date().getFullYear()} NairaSave. All rights reserved. NairaSave is not yet a licensed financial institution.
          </p>
          <p className="text-xs text-gray-600">
            Built by <span className="text-secondary-700 dark:text-gray-500 font-medium">Team Guru</span> · NTTS 2026
          </p>
        </div>
      </div>
    </footer>
  )
}

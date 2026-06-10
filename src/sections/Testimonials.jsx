import FadeUp from '../components/FadeUp'
import SectionLabel from '../components/SectionLabel'
import { testimonials } from '../data'

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 lg:py-24 bg-white dark:bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Testimonials</SectionLabel>
          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl sm:text-4xl font-display font-bold text-secondary dark:text-white"
          >
            What early users are saying
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.12}>
              <figure className="bg-gray-50 dark:bg-secondary-800 border border-gray-100 dark:border-secondary-700 rounded-2xl p-6 h-full flex flex-col hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <Stars />
                <blockquote className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-secondary-700">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

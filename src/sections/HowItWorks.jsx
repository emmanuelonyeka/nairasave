import FadeUp from '../components/FadeUp'
import SectionLabel from '../components/SectionLabel'
import { steps } from '../data'

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-secondary-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <SectionLabel>How It Works</SectionLabel>
          <h2
            id="how-heading"
            className="mt-4 text-3xl sm:text-4xl font-display font-bold text-secondary dark:text-white"
          >
            Up and running in three steps
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            No long forms. No branch visits. No waiting weeks for approval.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting line – desktop only */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 z-0"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.15}>
              <div className="relative text-center bg-white dark:bg-secondary rounded-2xl p-8 border border-gray-100 dark:border-secondary-700 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 z-10">
                {/* Number badge */}
                <div className="mx-auto w-14 h-14 rounded-2xl bg-secondary dark:bg-secondary-700 flex items-center justify-center mb-5 text-primary font-display font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-secondary dark:text-white text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

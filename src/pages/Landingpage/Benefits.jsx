import { HiShieldCheck, HiCurrencyDollar, HiGlobe, HiTrendingUp } from 'react-icons/hi'
import FadeUp from '../../components/FadeUp'
import SectionLabel from '../../components/SectionLabel'
import { benefits } from '../../data'

const icons = [HiShieldCheck, HiCurrencyDollar, HiGlobe, HiTrendingUp]

export default function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="py-16 lg:py-24 bg-white dark:bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Stats card */}
          <FadeUp>
          <div className="relative px-2 sm:px-0 pb-8 sm:pb-0">
              <div className="bg-gray-200 dark:bg-secondary-800 rounded-3xl p-6 sm:p-8 text-gray-500 dark:text-white">
                <p className="text-sm font-medium text-gray-900 mb-2">Naira vs Dollar — 5 Years</p>
                <h3 className="text-2xl font-display text-gray-500 font-bold dark:text-white mb-6">
                  The Naira lost{' '}
                  <span className="text-red-400">70%</span> of its value.
                  <br />
                  The Dollar gained{' '}
                  <span className="text-primary">steadily.</span>
                </h3>

                {/* Visual comparison bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary-800 dark:text-gray-400">NGN Savings (₦1M in 2019)</span>
                      <span className="text-red-400 font-semibold">₦290K value today</span>
                    </div>
                    <div className="h-3 bg-gray-400 dark:bg-secondary-700 rounded-full overflow-hidden">
                      <FadeUp>
                        <div className="h-full w-[29%] bg-red-400 rounded-full" />
                      </FadeUp>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary-800 dark:text-gray-400">USD Savings ($645 in 2019)</span>
                      <span className="text-primary font-semibold">₦999,750 value today</span>
                    </div>
                    <div className="h-3 bg-gray-400 dark:bg-secondary-700 rounded-full overflow-hidden">
                      <FadeUp delay={0.1}>
                        <div className="h-full w-[100%] bg-primary rounded-full" />
                      </FadeUp>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  Illustrative comparison. Past performance is not a guarantee of future results.
                </p>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6right-4 sm:-bottom-8 sm:right-4 bg-secondary-700 dark:bg-primary rounded-2xl px-4 py-2.5 shadow-xl z-10"
                aria-hidden="true"
              >
                <p className="text-xs text-gray-300 dark:text-white/70">If you had saved in USD</p>
                <p className="text-lg font-display font-bold text-gray-300 dark:text-white">+244% preserved</p>
              </div>
            </div>
          </FadeUp>

          {/* Right: Benefit list */}
          <div>
            <FadeUp>
              <SectionLabel>Benefits</SectionLabel>
              <h2
                id="benefits-heading"
                className="mt-4 text-3xl sm:text-4xl font-display font-bold text-secondary dark:text-white"
              >
                Why smart Nigerians are switching to USD savings
              </h2>
            </FadeUp>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit, i) => {
                const Icon = icons[i]
                return (
                  <FadeUp key={benefit.title} delay={i * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary dark:text-white mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {benefit.text}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { HiCreditCard, HiRefresh, HiTrendingUp, HiLightningBolt } from 'react-icons/hi'
import FadeUp from '../../components/FadeUp'
import SectionLabel from '../../components/SectionLabel'
import { features } from '../../data'

const iconMap = {
  wallet: HiCreditCard,
  refresh: HiRefresh,
  chart: HiTrendingUp,
  zap: HiLightningBolt,
}

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-16 lg:py-24 bg-white dark:bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Features</SectionLabel>
          <h2
            id="features-heading"
            className="mt-4 text-3xl sm:text-4xl font-display font-bold text-secondary dark:text-white"
          >
            Everything you need to save smarter
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A full-featured USD savings platform designed around your financial goals, not a bank's.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <FadeUp key={feature.id} delay={i * 0.1}>
                <article className="group bg-gray-50 dark:bg-secondary-800 border border-gray-100 dark:border-secondary-700 rounded-2xl p-6 h-full hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/80 dark:hover:shadow-black/40 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-secondary dark:text-white mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

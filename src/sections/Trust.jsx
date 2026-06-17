import { HiShieldCheck, HiLockClosed, HiFlag, HiChartBar } from 'react-icons/hi'
import FadeUp from '../components/FadeUp'
import SectionLabel from '../components/SectionLabel'
import { trustPoints } from '../data'

const iconMap = {
  shield: HiShieldCheck,
  lock: HiLockClosed,
  flag: HiFlag,
  activity: HiChartBar,
}

export default function Trust() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="py-16 lg:py-20 bg-white dark:bg-secondary-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionLabel>Why NairaSave</SectionLabel>
          <h2
            id="trust-heading"
            className="mt-4 text-3xl sm:text-4xl font-display font-bold dark:text-white"
          >
            Built on trust, engineered for Nigerians
          </h2>
          <p className="mt-3 dark:text-gray-400 max-w-xl mx-auto">
            Every feature is designed with the Nigerian financial reality in mind, so you can save confidently.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPoints.map((point, i) => {
            const Icon = iconMap[point.icon]
            return (
              <FadeUp key={point.title} delay={i * 0.1}>
                <div className="bg-gray-50 dark:bg-secondary/50 border border-gray-200/60 dark:border-secondary-700 rounded-2xl p-6 h-full hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary dark:text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-secondary dark:text-white mb-2">{point.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed">{point.text}</p>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

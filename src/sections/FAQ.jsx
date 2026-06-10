import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import FadeUp from '../components/FadeUp'
import SectionLabel from '../components/SectionLabel'
import { faqs } from '../data'

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
      isOpen
        ? 'border-primary'
        : 'border-gray-200 dark:border-secondary-700'
    }`}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white dark:bg-secondary-800 hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-150 focus:outline-none"
      >
        <span className="font-semibold text-secondary dark:text-white text-sm sm:text-base">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 dark:bg-secondary-700 flex items-center justify-center"
          aria-hidden="true"
        >
          <HiChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-300" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 bg-white dark:bg-secondary-800 border-t border-gray-100 dark:border-secondary-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-secondary-800"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl sm:text-4xl font-display font-bold text-secondary dark:text-white"
          >
            Questions you're probably asking
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 mb-4">
            Can't find an answer? Reach us on WhatsApp — always open.
          </p>
          <a
            href="https://wa.me/2348123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </FadeUp>

        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

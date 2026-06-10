import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-600 focus:ring-primary shadow-lg shadow-primary/30 hover:shadow-primary/40',
    outline:
      'border-2 border-primary text-primary dark:text-primary hover:bg-primary hover:text-white dark:hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/30 focus:ring-primary dark:border-primary',
    ghost:
      'text-secondary dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-secondary-800 focus:ring-gray-300',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

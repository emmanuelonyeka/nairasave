export default function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase border border-primary/20">
      {children}
    </span>
  )
}

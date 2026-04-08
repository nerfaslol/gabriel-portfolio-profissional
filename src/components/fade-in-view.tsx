import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FadeInViewProps {
  children: React.ReactNode
  className?: string
  delay?: string
  threshold?: number
}

/**
 * Anima o conteúdo apenas quando ele entra no viewport.
 * Usa IntersectionObserver para evitar que animações disparem antes de serem vistas.
 * Respeita prefers-reduced-motion via CSS (aplicado globalmente em index.css).
 */
export function FadeInView({
  children,
  className,
  delay = '',
  threshold = 0.08,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn(
        visible
          ? cn(
              'animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both',
              delay
            )
          : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  )
}

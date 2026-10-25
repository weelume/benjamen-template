'use client'
import { motion, useInView, useReducedMotion, animate, useMotionValue, useTransform, type HTMLMotionProps } from 'framer-motion'
import { useEffect, useRef } from 'react'
export const ease = [0.16, 1, 0.3, 1] as const
export function Reveal({ children, delay = 0, x = 0, ...props }: HTMLMotionProps<'div'> & { delay?: number; x?: number }) {
  const reduced = useReducedMotion()
  return <motion.div initial={reduced ? false : { opacity: 0, y: x ? 0 : 30, x }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .8, ease, delay }} {...props}>{children}</motion.div>
}
export function Letters({ children, repeat = false }: { children: string; repeat?: boolean }) {
  const reduced = useReducedMotion()
  return <motion.span className="bj-letters" initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: !repeat, amount: .1 }} variants={{ visible: { transition: { staggerChildren: repeat ? .03 : .012, delayChildren: .15 } } }} aria-label={children}>{children.split(/(\s+)/).map((word, wi) => <span className="bj-word" aria-hidden="true" key={wi}>{Array.from(word).map((letter, i) => <motion.span key={i} style={{ display: 'inline-block', whiteSpace: 'pre' }} variants={{ hidden: { opacity: 0, y: repeat ? 35 : 15 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: repeat ? 18 : 24, stiffness: repeat ? 120 : 150 } } }}>{letter}</motion.span>)}</span>)}</motion.span>
}
export function Count({ value, suffix = '', repeat = false }: { value: number; suffix?: string; repeat?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null), visible = useInView(ref, { once: !repeat, amount: .2 }), reduced = useReducedMotion()
  const count = useMotionValue(0), rounded = useTransform(count, Math.round)
  useEffect(() => {
    if (!visible) { count.set(0); return }
    const controls = animate(count, value, { duration: reduced ? 0 : 1.2, ease: (t: number) => t * (2 - t) })
    return controls.stop
  }, [visible, value, count, reduced])
  return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>
}

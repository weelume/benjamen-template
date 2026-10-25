'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { TemplateLocale } from '../../../types'
import { results, copy, text } from '../content/data'
import { Count, Letters } from './Motion'
function Result({ index, locale }: { index: number; locale: TemplateLocale }) {
  const item = results[index], ref = useRef<HTMLElement>(null), visible = useInView(ref, { amount: .2 }), [hover, setHover] = useState(false)
  return <article ref={ref} className="bj-result bj-glass" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)} tabIndex={0}><motion.div className="bj-result-fill" animate={{ height: visible ? `${hover ? 100 : item.height}%` : '0%' }} transition={{ type: 'spring', damping: 35, stiffness: 25, mass: 1.8 }} /><div className="bj-result-content" style={{ paddingTop: [0, 110, 155][index] }}><strong><Count value={item.value} suffix={item.suffix} repeat /></strong><h3>{item.title[locale]}</h3><p>{item.detail[locale]}</p></div><small>{item.label[locale]}</small></article>
}
export function Results({ locale }: { locale: TemplateLocale }) {
  return <section id="results" className="bj-section"><h2 className="bj-statement"><small>{text('增长成果', 'Result & Metrics')[locale]}</small><Letters>{copy.metrics[locale]}</Letters></h2><div className="bj-results">{results.map((_, i) => <Result index={i} locale={locale} key={i} />)}</div></section>
}

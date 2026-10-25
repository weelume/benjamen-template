'use client'
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { TemplateLocale } from '../../../types'
import { reviews, text } from '../content/data'
import { SectionHeading } from './SectionHeading'
import { asset } from '../config/brand'
import { Reveal, ease } from './Motion'
export function Testimonials({ locale, homeHref = '/' }: { locale: TemplateLocale; homeHref?: string }) {
  const [index, setIndex] = useState(0), reduced = useReducedMotion(), item = reviews[index]
  const move = (step: number) => setIndex(current => (current + step + reviews.length) % reviews.length)
  return <section id="testimonials" className="bj-section"><SectionHeading title={text('客户评价', 'TESTIMONIALS')[locale]} action={text('了解更多', 'Explore More')[locale]} href={homeHref + '#contacts'} /><Reveal><div className="bj-review bj-glass" tabIndex={0} onKeyDown={event => { if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1) }} role="region" aria-label={text('客户评价轮播', 'Client testimonial carousel')[locale]}><div className="bj-review-top"><img src={asset(`avater img 0${index + 1}.png`)} alt="" /><div><strong>{item.name}</strong><AnimatePresence mode="wait"><motion.p key={index} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: .45, ease }}>{item.role[locale]}</motion.p></AnimatePresence></div><img className="bj-quote-icon" src={asset('Quite icon benjamen.svg')} alt="" /></div><blockquote key={index} aria-label={item.quote[locale]}>{Array.from(item.quote[locale]).map((char, i) => <motion.span aria-hidden="true" key={i} initial={reduced ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .12, delay: reduced ? 0 : i * .004, ease }}>{char}</motion.span>)}</blockquote><div className="bj-review-bottom"><span className="bj-stars" aria-label={text('五星', 'Five stars')[locale]}>★★★★★</span><div className="bj-carousel-controls"><button onClick={() => move(-1)} aria-label={text('上一条评价', 'Previous review')[locale]}>‹</button><span aria-live="polite">{index + 1} / {reviews.length}</span><button onClick={() => move(1)} aria-label={text('下一条评价', 'Next review')[locale]}>›</button></div></div></div><div className="bj-trusted"><div>{[1, 2, 3, 4].map(i => <img src={asset(`avater img 0${i}.png`)} alt="" key={i} />)}</div><p>{text('受到多个行业的 3.6k+ 品牌关注', 'Trusted by 3.6k+ brands across multiple industries.')[locale]}</p></div></Reveal></section>
}

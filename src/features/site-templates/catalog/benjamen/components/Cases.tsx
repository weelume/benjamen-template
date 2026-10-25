'use client'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion'
import type { TemplateLocale } from '../../../types'
import { SectionHeading } from './SectionHeading'
import { asset } from '../config/brand'
import { cases, text } from '../content/data'
import { Count } from './Motion'
function Card({ index, locale }: { index: number; locale: TemplateLocale }) {
  const item = cases[index]
  return <article className="bj-case bj-glass"><div className="bj-case-copy"><h3>{item.title[locale]}</h3><p>{item.intro[locale]}</p><div className="bj-case-columns"><div><h4>{text('挑战', 'Challenge')[locale]}</h4><p>{item.challenge[locale]}</p></div><div><h4>{text('解决方案', 'Solution')[locale]}</h4><p>{item.solution[locale]}</p></div></div><div className="bj-case-metrics">{item.values.map((value, i) => <div key={i}><strong><Count value={value} suffix="%" /></strong><span>{item.labels[i][locale]}</span></div>)}</div></div><img src={asset(`Case card img 0${index + 1}.png`)} alt={item.title[locale]} /></article>
}
function StackCard({ index, progress, locale }: { index: number; progress: MotionValue<number>; locale: TemplateLocale }) {
  // 每张卡使用固定钩子顺序，滚动区间与原站的 0/.05/.45/.9/1 对齐。
  const y = useTransform(progress, [0, .05, .45, .9, 1], index === 0 ? [0, 0, 0, 0, 0] : index === 1 ? [493, 493, 80, 80, 80] : [986, 986, 573, 160, 160])
  const scale = useTransform(progress, [0, .05, .45, .9, 1], index === 0 ? [1, 1, .92, .92, .92] : index === 1 ? [1, 1, 1, .96, .96] : [1, 1, 1, 1, 1])
  const opacity = useTransform(progress, [0, .45, .9, 1], index === 0 ? [1, .85, .85, .85] : index === 1 ? [1, 1, .92, .92] : [1, 1, 1, 1])
  return <motion.div className="bj-stack-card" style={{ y, scale, opacity, zIndex: index + 1 }}><Card index={index} locale={locale} /></motion.div>
}
export function Cases({ locale, homeHref = '/' }: { locale: TemplateLocale; homeHref?: string }) {
  const [index, setIndex] = useState(0), ref = useRef<HTMLDivElement>(null), reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const move = (step: number) => setIndex(current => (current + step + cases.length) % cases.length)
  return <section id="case-studies" className="bj-section"><SectionHeading title={text('案例研究', 'CASE STUDIES')[locale]} action={text('了解更多', 'Explore More')[locale]} href={homeHref + '#contacts'} /><div className={`bj-case-stack ${reduced ? 'bj-static-stack' : ''}`} ref={ref}><div>{cases.map((_, i) => reduced ? <Card key={i} index={i} locale={locale} /> : <StackCard key={i} index={i} progress={scrollYProgress} locale={locale} />)}</div></div><div className="bj-case-carousel" role="region" aria-roledescription={text('轮播', 'Carousel')[locale]} aria-label={text('案例研究', 'Case studies')[locale]} onKeyDown={event => { if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1) }} tabIndex={0}><AnimatePresence mode="wait"><motion.div key={index} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: .4 }}><Card index={index} locale={locale} /></motion.div></AnimatePresence><div className="bj-carousel-controls"><button onClick={() => move(-1)} aria-label={text('上一个案例', 'Previous case')[locale]}>‹</button><span aria-live="polite">{index + 1} / {cases.length}</span><button onClick={() => move(1)} aria-label={text('下一个案例', 'Next case')[locale]}>›</button></div><div className="bj-dots">{cases.map((item, i) => <button aria-label={item.title[locale]} aria-pressed={index === i} key={i} onClick={() => setIndex(i)} />)}</div></div></section>
}

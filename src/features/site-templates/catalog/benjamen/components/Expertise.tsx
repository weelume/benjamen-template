'use client'
import { motion } from 'framer-motion'
import type { TemplateLocale } from '../../../types'
import { asset } from '../config/brand'
import { services, text } from '../content/data'
import { Reveal } from './Motion'
export function Expertise({ locale }: { locale: TemplateLocale }) {
  return <section id="expertise" className="bj-section"><Reveal x={-30}><h2>{text('核心专长', 'CORE EXPERTISE')[locale]}</h2></Reveal><div className="bj-services">{services.map((item, i) => <Reveal key={item.title.en} delay={i % 3 * .12}><motion.article className="bj-service bj-glass" tabIndex={0} initial="rest" whileHover="active" whileFocus="active" whileTap="active"><motion.img variants={{ rest: { opacity: 0, scale: 1 }, active: { opacity: 1, scale: 1.04 } }} transition={{ duration: 1.3, ease: [.16, 1, .3, 1] }} src={asset(`card image 0${i + 1}.png`)} alt="" /><div><span className="bj-service-number">0{i + 1}</span><h3>{item.title[locale]}</h3><p>{item.description[locale]}</p></div></motion.article></Reveal>)}</div></section>
}

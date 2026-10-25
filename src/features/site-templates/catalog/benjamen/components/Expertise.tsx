'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { TemplateLocale } from '../../../types'
import { SectionHeading } from './SectionHeading'
import { asset } from '../config/brand'
import { services, text } from '../content/data'
import { Reveal } from './Motion'
export function Expertise({ locale, homeHref = '/' }: { locale: TemplateLocale; homeHref?: string }) {
  const [active, setActive] = useState(1)
  return <section id="expertise" className="bj-section"><SectionHeading title={text('核心专长', 'CORE EXPERTISE')[locale]} action={text('了解更多', 'Explore More')[locale]} href={homeHref + '#contacts'} /><div className="bj-services">{services.map((item, i) => <Reveal key={item.title.en} delay={i % 3 * .12}><motion.article className="bj-service bj-glass" data-active={active === i} tabIndex={0} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} initial="rest" animate={active === i ? 'active' : 'rest'}><motion.img variants={{ rest: { opacity: 0, scale: 1 }, active: { opacity: 1, scale: 1.04 } }} transition={{ duration: 1.3, ease: [.16, 1, .3, 1] }} src={asset(`card image 0${i + 1}.png`)} alt="" /><div><img className="bj-service-icon" src={asset(`card logo 0${i + 1}.svg`)} alt="" /><motion.h3 variants={{ rest: { color: '#101010' }, active: { color: '#ffffff' } }} transition={{ duration: .9 }}>{item.title[locale]}</motion.h3><motion.img className="bj-service-thumbnail" src={asset(`card image 0${i + 1}.png`)} alt="" variants={{ rest: { opacity: 1, y: 0 }, active: { opacity: 0, y: 10 } }} transition={{ duration: .9, ease: [.16, 1, .3, 1] }} /><motion.p variants={{ rest: { opacity: 0, y: 50 }, active: { opacity: 1, y: 0 } }} transition={{ duration: 1.1, ease: [.16, 1, .3, 1], delay: active === i ? .12 : 0 }}>{item.description[locale]}</motion.p></div></motion.article></Reveal>)}</div></section>
}

'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { asset } from '../config/brand'
import { works, text } from '../content/data'
import { Reveal, ease } from './Motion'
export function Works({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  return <section id="featured-work" className="bj-section"><Reveal x={-30}><h2>{text('精选作品', 'FEATURED WORK')[locale]}</h2></Reveal><div className="bj-works">{works.map((work, i) => <Reveal key={work.name} delay={i % 2 * .15}><motion.div initial="rest" whileHover="hover" whileTap="tap"><Link href={`${basePath || '/'}#case-studies`} className="bj-work"><div><motion.img src={asset(`featured card img 0${i + 1}.png`)} alt={`${work.name} ${work.type[locale]}`} variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.05, rotate: 2 }, tap: { scale: 1.08, rotate: 2 } }} transition={{ duration: .6, ease }} /></div><h3>{work.name}</h3><p>{work.type[locale]}</p></Link></motion.div></Reveal>)}</div></section>
}

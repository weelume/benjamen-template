'use client'
import { motion } from 'framer-motion'
import type { SiteTemplatePageProps } from '../../../types'
import { asset } from '../config/brand'
import { copy } from '../content/data'
import { useBenjamenHost } from '../host'
import { FlipLink } from './FlipLink'
import { ease } from './Motion'
import { Video } from './Video'
export function Hero({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  const host = useBenjamenHost()
  const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: .6, ease } } }
  return <section id="home" className="bj-hero"><motion.div className="bj-hero-grid" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12, delayChildren: .1 } } }}>
    <div className="bj-hero-copy"><motion.p variants={item}>{copy.greeting[locale]}</motion.p><motion.h1 variants={item}>{host.logo && <img src={host.logo} alt="" />}{host.brandName[locale].split(/[· ]/).map(part => <span key={part}>{part}</span>)}</motion.h1><motion.p variants={item} className="bj-intro">{copy.intro[locale]}</motion.p><motion.p variants={item} className="bj-available"><i />{copy.available[locale]}</motion.p><motion.div variants={item}><FlipLink href={`${basePath || '/'}#contacts`}>{copy.book[locale]}</FlipLink></motion.div><motion.div className="bj-rating" variants={item}><span aria-label={locale === 'zh' ? '五星评价' : 'Five star rating'}>★★★★★</span>{copy.rating[locale]}</motion.div></div>
    <motion.div variants={item} className="bj-hero-portrait"><Video name="header right video.mp4" label={locale === 'zh' ? '人物介绍视频' : 'Portrait video'} /><div className="bj-followers"><span>{[1, 2, 3, 4].map(i => <img key={i} src={asset(`avater img 0${i}.png`)} alt="" />)}</span>{locale === 'zh' ? '新增 150K+ 关注者' : '150K+ Followers Grown'}</div></motion.div>
  </motion.div><div className="bj-brands"><p>{copy.promise[locale]}</p><div className="bj-marquee" tabIndex={0} aria-label={locale === 'zh' ? '合作品牌，聚焦暂停' : 'Client brands, focus to pause'}><div>{[0, 1].map(group => <div className="bj-marquee-group" key={group} aria-hidden={group === 1}>{[1, 2, 3, 4, 5, 6].map(i => <img key={i} src={asset(`logo 0${i}.svg`)} alt={group === 0 ? `Brand ${i}` : ''} />)}</div>)}</div></div></div></section>
}

'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import type { SiteTemplatePageProps } from '../../../types'
import { asset } from '../config/brand'
import { copy, text } from '../content/data'
import { Count, Letters, Reveal } from './Motion'
import { FlipLink } from './FlipLink'
import { Video } from './Video'
export function About({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  const ref = useRef<HTMLDivElement>(null), reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // 三段滚动时间线：翻折入场、视频扩展、文字覆盖；移动端使用原站顺序布局。
  const rotateX = useTransform(scrollYProgress, [0, .25], [-70, 0]), scale = useTransform(scrollYProgress, [0, .25], [.85, 1])
  const opacity = useTransform(scrollYProgress, [0, .22, .35, .55], [0, 1, 1, 0]), width = useTransform(scrollYProgress, [.35, .65], ['38%', '100%'])
  const overlay = useTransform(scrollYProgress, [.38, .58], [0, 1]), smallWidth = useTransform(scrollYProgress, [.35, .65], ['30%', '0%'])
  const height = useTransform(scrollYProgress, [.35, .65], [320, 740])
  return <section id="about" className="bj-section"><h2 className="bj-statement"><small>{text('关于我', 'About')[locale]}</small><Letters>{copy.about[locale]}</Letters></h2><Reveal className="bj-about-stat"><strong><Count value={78} suffix="+" /></strong><p>{copy.trust[locale]}</p></Reveal>
    <div className="bj-about-stage" ref={ref}><div className="bj-about-scene"><motion.div className="bj-about-side" style={reduced ? {} : { width: smallWidth, opacity, rotateX, scale }}><img src={asset('about me 01.png')} alt={text('品牌内容展示', 'Brand content showcase')[locale]} /></motion.div><motion.div className="bj-about-video" style={reduced ? {} : { width, height, rotateX, scale }}><Video name="about me 02.mp4" label={text('品牌增长展示视频', 'Brand growth video')[locale]} /><motion.div className="bj-about-overlay" style={reduced ? { opacity: 1 } : { opacity: overlay }}><h3>{text('让每一次连接\n都成为增长的起点', 'CONTENT THAT CONNECTS. STRATEGY THAT GROWS.')[locale]}</h3><FlipLink href={`${basePath || '/'}#results`}>{text('查看增长成果', 'See Campaign Results')[locale]}</FlipLink></motion.div></motion.div></div><Reveal className="bj-about-bottom"><img src={asset('about me 03.png')} alt={text('内容创作工作日常', 'Behind the scenes')[locale]} /><div><h3>{text('以策略为起点\n与品牌共同成长', 'GROWING BRANDS THROUGH PURPOSEFUL CONTENT')[locale]}</h3><FlipLink href={`${basePath || '/'}#experience`}>{text('了解我的经历', 'More About Me')[locale]}</FlipLink></div></Reveal></div>
  </section>
}

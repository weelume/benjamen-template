'use client'
import type { TemplateLocale } from '../../../types'
import { asset } from '../config/brand'
import { experience, services, text } from '../content/data'
import { Reveal } from './Motion'
export function Experience({ locale }: { locale: TemplateLocale }) {
  return <section id="experience" className="bj-section"><Reveal x={-30}><h2>{text('技能与经历', 'SKILLS & EXPERTISE')[locale]}</h2></Reveal><Reveal className="bj-experience-profile bj-glass"><img className="bj-experience-cover" src={asset('expertise cover img.png')} alt={text('创意工作空间', 'Creative workspace')[locale]} /><div><img className="bj-avatar" src={asset('Benjamen nav left img 01.png')} alt={text('本杰明肖像', 'Benjamen portrait')[locale]} /><div className="bj-tags">{services.slice(0, 4).map(item => <span key={item.title.en}>{item.title[locale]}</span>)}</div></div></Reveal><div className="bj-experience-list">{experience.map((job, i) => <Reveal key={i} delay={i * .1}><article><div><h3>{job.role[locale]}</h3><p>{typeof job.agency === 'string' ? job.agency : job.agency[locale]}</p></div><span>{job.period[locale]}</span></article></Reveal>)}</div></section>
}

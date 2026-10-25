'use client'
import type { SiteTemplatePageProps } from '../../../types'
import { asset } from '../config/brand'
import { copy, text } from '../content/data'
import { Letters, Reveal } from './Motion'
import { FlipLink } from './FlipLink'
export function CTA({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  return <section className="bj-section" id="cta"><h2 className="bj-statement"><small>{text('一起创造', 'Let’s connect')[locale]}</small><Letters>{copy.cta[locale]}</Letters></h2><Reveal className="bj-cta-grid"><div className="bj-cta-photo"><img src={asset('CTA left card BG.png')} alt="" /><div><h3>{text('让你的品牌 / 持续生长', 'LET’S GROW YOUR BRAND')[locale]}</h3><FlipLink href={`${basePath || '/'}#contacts`}>{copy.book[locale]}</FlipLink></div></div><div className="bj-cta-reasons bj-glass"><h3>{text('为什么 / 与我合作', 'WHY WORK WITH ME?')[locale]}</h3>{[text('用清晰的策略回应真实的业务目标', 'Clear strategy aligned with your business goals'), text('以创意内容建立有意义的连接', 'Creative content that builds meaningful connections'), text('让每一步增长都有数据可循', 'Data-driven decisions and measurable results')].map((item, i) => <p key={i}><span>0{i + 1}</span>{item[locale]}</p>)}</div></Reveal></section>
}

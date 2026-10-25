'use client'
import type { SiteTemplatePageProps } from '../../../types'
import { asset } from '../config/brand'
import { copy, text } from '../content/data'
import { Letters, Reveal } from './Motion'
import { FlipLink } from './FlipLink'
export function CTA({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  return <section className="bj-section" id="cta"><h2 className="bj-statement"><small>{text('一起创造', 'Let’s connect')[locale]}</small><Letters>{copy.cta[locale]}</Letters></h2><Reveal className="bj-cta-grid"><div className="bj-cta-photo"><img src={asset('CTA left card BG.png')} alt="" /><div><h3>{text('让你的品牌\n持续生长', 'LET’S GROW YOUR BRAND')[locale]}</h3><FlipLink href={`${basePath || '/'}#contacts`}>{copy.book[locale]}</FlipLink></div></div><div className="bj-cta-reasons bj-glass"><h3>{text('为什么\n与我合作', 'WHY WORK WITH ME?')[locale]}</h3>{[text('策略思维', 'Strategic Approach'), text('创意内容', 'Creative Content'), text('数据驱动', 'Data Driven'), text('受众互动', 'Audience Engagement'), text('聚焦增长', 'Growth Focused'), text('真实成果', 'Results That Matter'), text('高效合作', 'Easy to Work With'), text('搜索引擎优化', '100% SEO Optimized'), text('稳定可靠', 'Consistent & Reliable')].map((item, i) => <p key={i}><span>0{i + 1}</span>{item[locale]}</p>)}</div></Reveal></section>
}

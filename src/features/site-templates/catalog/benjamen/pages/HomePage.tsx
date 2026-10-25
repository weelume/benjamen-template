import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Expertise } from '../components/Expertise'
import { Works } from '../components/Works'
import { Cases } from '../components/Cases'
import { Results } from '../components/Results'
import { Testimonials } from '../components/Testimonials'
import { Experience } from '../components/Experience'
import { Contact } from '../components/Contact'
import { CTA } from '../components/CTA'
export default function HomePage(props: SiteTemplatePageProps) {
  const locale = props.locale || 'zh'
  return <Shell {...props}><Hero {...props} /><About {...props} /><Expertise locale={locale} /><Works {...props} /><Cases locale={locale} /><Results locale={locale} /><Testimonials locale={locale} /><Experience locale={locale} /><Contact locale={locale} /><CTA {...props} /></Shell>
}

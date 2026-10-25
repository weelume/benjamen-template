import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { text } from '../content/data'
export default function ChangelogPage(props: SiteTemplatePageProps) { const locale = props.locale || 'zh'; return <Shell {...props}><article className="bj-section bj-prose"><h1>{text('更新记录', 'CHANGELOG')[locale]}</h1><h2>1.0.0 · 2026-10-25</h2><p>{text('双语响应式作品集：固定导航、人物视频、内容与专长、作品、滚动案例、增长数据、评价、经历与本地联系表单。', 'Bilingual responsive portfolio with fixed navigation, portrait video, about and expertise, featured work, scroll-stacked case studies, metrics, testimonials, experience and a local demo contact form.')[locale]}</p></article></Shell> }

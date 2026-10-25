'use client'
import Link from 'next/link'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import type { SiteTemplatePageProps } from '../../../types'
import { brand, asset } from '../config/brand'
import { useBenjamenHost } from '../host'
import { copy, navigation, text } from '../content/data'
import { Letters, ease } from './Motion'
import '../theme.css'
export function Shell({ locale = 'zh', basePath, children }: SiteTemplatePageProps & { children: ReactNode }) {
  const host = useBenjamenHost(), [open, setOpen] = useState(false), [active, setActive] = useState('home'), pathname = usePathname()
  const [suffix, setSuffix] = useState('')
  const root = locale === 'en' ? basePath.replace(/\/en$/, '') : basePath
  const page = pathname.slice(basePath.length)
  const switchHref = `${root}${locale === 'zh' ? '/en' : ''}${page}${suffix}` || '/'
  useEffect(() => {
    const update = () => setSuffix(window.location.search + window.location.hash)
    update(); window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [pathname])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id) }, { rootMargin: '-10% 0px -65% 0px' })
    document.querySelectorAll('.bj-main section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])
  const home = basePath || '/'
  const nav = <nav aria-label={text('主导航', 'Main navigation')[locale]}>{navigation.map(([id, label]) => <Link key={id} href={`${home}#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{active === id && <motion.i layoutId="bj-active-nav" />}{label[locale]}</Link>)}</nav>
  const tools = <><small>{text('常用工具', 'Tools I Use')[locale]}</small><div className="bj-tools">{['canva.png', 'notion.png', 'blade.png'].map((name, i) => <img key={name} src={asset(name)} alt={['Canva', 'Notion', 'Buffer'][i]} />)}<span>21+</span></div><small>{text('社交平台', 'Connect With')[locale]}</small><div className="bj-tools">{['facebook', 'linkedin', 'twitter', 'youtube'].map(name => <a key={name} href={`https://${name === 'linkedin' ? 'www.linkedin' : name}.com`} target="_blank" rel="noreferrer" aria-label={name}><img src={asset(name + '.svg')} alt="" /></a>)}</div></>
  return <MotionConfig reducedMotion="user"><div className="bj-site" data-menu-open={open} lang={locale === 'zh' ? 'zh-CN' : 'en'}>
    <header className="bj-mobile-header"><Link href={home}>{host.logo && <img src={host.logo} alt="" />}{host.brandName[locale]}</Link><div><Link href={switchHref} hrefLang={locale === 'zh' ? 'en' : 'zh'}>{locale === 'zh' ? 'EN' : '中文'}</Link><button aria-expanded={open} aria-controls="bj-mobile-nav" aria-label={text('切换菜单', 'Toggle menu')[locale]} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button></div></header>
    <div inert={!open} aria-hidden={!open}><AnimatePresence>{open && <motion.button key="shade" className="bj-menu-shade" aria-label={text('关闭菜单', 'Close menu')[locale]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />}{open && <motion.div key="menu" id="bj-mobile-nav" className="bj-mobile-nav" aria-hidden={!open} inert={!open} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3, ease: 'easeInOut' }}>{nav}{tools}</motion.div>}</AnimatePresence></div>
    <div className="bj-layout"><motion.aside className="bj-sidebar" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, ease }}><Link className="bj-identity" href={home}><img src={host.logo || asset('Benjamen nav left img 01.png')} alt="" /><span>{copy.role[locale]}</span><strong>{host.brandName[locale].split(/[· ]/).map(part => <span key={part}>{part}</span>)}</strong></Link>{nav}{tools}<Link className="bj-language" href={switchHref} hrefLang={locale === 'zh' ? 'en' : 'zh'}>{locale === 'zh' ? 'English' : '简体中文'}</Link></motion.aside>
    <main className="bj-main">{children}<footer className="bj-footer"><div className="bj-footer-links">{navigation.filter((_, i) => [0, 1, 3, 7, 8].includes(i)).map(([id, label]) => <Link href={`${home}#${id}`} key={id}>{label[locale]}</Link>)}</div><div className="bj-footer-name"><Letters repeat>{host.brandName[locale]}</Letters><span>{text('让品牌与受众建立真实连接', 'Meaningful connections. Measurable growth.')[locale]}</span></div><div className="bj-footer-bottom"><span>© {brand.year} {host.brandName[locale]}</span><Link href={`${basePath}/changelog`}>{text('更新记录', 'Changelog')[locale]}</Link><Link href={`${basePath}/privacy`}>{text('隐私政策', 'Privacy Policy')[locale]}</Link></div>{host.filing}</footer></main></div>
    {host.marketplaceHref && <Link className="bj-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo && <img src={host.lightLogo} alt="" />}<span>{host.brandName[locale]}</span></Link>}
  </div></MotionConfig>
}

'use client'
import { useState, type FormEvent } from 'react'
import type { TemplateLocale } from '../../../types'
import { brand, asset } from '../config/brand'
import { services, copy, text } from '../content/data'
import { useBenjamenHost } from '../host'
import { Letters, Reveal } from './Motion'
import { FlipButton } from './FlipLink'
export function Contact({ locale }: { locale: TemplateLocale }) {
  const [submitted, setSubmitted] = useState(false), host = useBenjamenHost()
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    // 演示表单不发送、不保存；日志只记录校验状态，不读取任何表单内容。
    console.debug('[benjamen:contact] local validation complete', { sent: false, stored: false }); setSubmitted(true)
  }
  return <section id="contacts" className="bj-section"><h2 className="bj-statement"><small>{text('联系我', 'Contacts')[locale]}</small><Letters>{copy.contact[locale]}</Letters></h2><Reveal className="bj-form-frame"><form onSubmit={submit} className="bj-form bj-glass" onChange={() => setSubmitted(false)}><div className="bj-fields"><label>{text('姓名', 'Full Name')[locale]}<input required name="name" autoComplete="name" maxLength={100} /></label><label>{text('邮箱', 'Email Address')[locale]}<input required type="email" name="email" autoComplete="email" maxLength={254} /></label><label>{text('网站（可选）', 'Website (optional)')[locale]}<input type="url" name="website" autoComplete="url" placeholder="https://" /></label><label>{text('你感兴趣的服务', 'What are you interested in?')[locale]}<select name="service">{services.map(item => <option key={item.title.en}>{item.title[locale]}</option>)}</select></label><label className="bj-field-full">{text('介绍一下你的项目', 'Tell me about your project')[locale]}<textarea required name="message" rows={5} maxLength={5000} /></label></div><p className="bj-form-note">{text('演示表单：仅在浏览器内校验，不会发送或保存任何信息。', 'Demo form: validates locally in your browser. Nothing is sent or saved.')[locale]}</p><FlipButton type="submit">{text('校验项目信息', 'Check Your Message')[locale]}</FlipButton>{submitted && <p role="status">{text('校验通过。这是本地演示，消息未发送，也未保存。', 'Validation passed. This is a local demo. Your message was not sent or saved.')[locale]}</p></form></Reveal><div className="bj-contact-identity"><img src={host.logo || asset('Benjamen nav left img 01.png')} alt="" /><div><strong>{host.brandName[locale]}</strong><span>{brand.email}</span><small>{text('通常在 24 小时内回复（演示文案）', 'I typically reply within 24 hrs (demo copy)')[locale]}</small></div><span className="bj-available"><i />{text('可以合作', 'AVAILABLE')[locale]}</span></div></section>
}

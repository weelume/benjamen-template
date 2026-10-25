'use client'
import { Reveal } from './Motion'
import { FlipLink } from './FlipLink'
export function SectionHeading({ title, action, href }: { title: string; action: string; href: string }) { return <div className="bj-section-heading"><Reveal x={-30}><h2>{title}</h2></Reveal><Reveal x={30}><FlipLink href={href}>{action}</FlipLink></Reveal></div> }

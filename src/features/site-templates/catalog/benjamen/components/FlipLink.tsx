'use client'
import Link from 'next/link'
import type { ButtonHTMLAttributes } from 'react'
export function FlipLink({ href, children, className = '' }: { href: string; children: string; className?: string }) {
  return <Link className={`bj-button ${className}`} href={href}><span className="bj-flip"><span>{children}</span><span aria-hidden="true">{children}</span></span></Link>
}
export function FlipButton({ children, className = '', ...props }: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { children: string }) {
  return <button className={`bj-button ${className}`} {...props}><span className="bj-flip"><span>{children}</span><span aria-hidden="true">{children}</span></span></button>
}

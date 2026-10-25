'use client'
import { createContext, useContext, type ReactNode } from 'react'
import { brand, type Bilingual } from './config/brand'
export interface BenjamenHostConfig { brandName: Bilingual; logo?: string; lightLogo?: string; marketplaceHref?: string; marketplaceLabel?: Bilingual; marketplaceAriaLabel?: Bilingual; filing?: ReactNode }
const Context = createContext<BenjamenHostConfig>({ brandName: brand.name })
export function BenjamenHostProvider({ children, ...config }: BenjamenHostConfig & { children: ReactNode }) { return <Context.Provider value={config}>{children}</Context.Provider> }
export const useBenjamenHost = () => useContext(Context)

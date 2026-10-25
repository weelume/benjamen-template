export type Bilingual = { zh: string; en: string }
export const brand = { name: { zh: '本杰明·卡瓦隆', en: 'Benjamen Cavalon' }, email: 'hello@benjamencavalon.com', year: 2026 }
export const asset = (name: string) => `/templates/benjamen/media/${encodeURIComponent(name)}`

import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile,readdir,stat} from 'node:fs/promises'
import {join} from 'node:path'
const read=path=>readFile(new URL('../'+path,import.meta.url),'utf8')
test('双语路由与真实页面注册一致',async()=>{const meta=JSON.parse(await read('.tpl/template.json'));assert.deepEqual(meta.surfaces[0].locales,['zh','en']);assert.deepEqual(meta.surfaces[0].pages.map(p=>p.slug),['','privacy','changelog']);const route=await read('src/app/[[...slug]]/page.tsx');assert.ok(route.includes('notFound()'));assert.ok(route.includes("locale === 'en' ? '/en' : ''"))})
test('所有记录素材均已本地交付，视频非空',async()=>{const assets=JSON.parse(await read('.tpl/docs/ASSETS.json'));for(const item of assets){const bytes=await stat(new URL('../public/templates/benjamen/media/'+encodeURIComponent(item.file),import.meta.url));assert.ok(bytes.size>0,item.file)}assert.ok(assets.some(item=>item.file.endsWith('.mp4')))})
test('模板源码无外部资源与装饰箭头，表单无外部发送',async()=>{async function files(dir){let out=[];for(const f of await readdir(new URL('../'+dir,import.meta.url),{withFileTypes:true})){const p=join(dir,f.name);if(f.isDirectory())out.push(...await files(p));else out.push(p)}return out}for(const path of await files('src/features/site-templates/catalog/benjamen')){const code=await read(path);assert.ok(!code.includes('cdn.jiro.build'),path);assert.ok(!code.includes('↗'),path)}const form=await read('src/features/site-templates/catalog/benjamen/components/Contact.tsx');assert.ok(!/fetch\(|localStorage|sessionStorage/.test(form));assert.ok(form.includes('reportValidity()'))})

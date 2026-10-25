import type { SiteTemplate } from '../../types'
export const benjamenTemplate: SiteTemplate = {
 id: 'benjamen', gitUrl: 'https://github.com/weelume/benjamen-template', name: 'Benjamen · 品牌增长作品集', localizedNames: { en: 'Benjamen · Social Media Portfolio' }, sceneId: 'personal-homepage', listed: false, tags: ["个人作品集","社交媒体","视频","滚动叠卡","双语"], summary: '黑白极简社交媒体营销作品集，包含人物视频、内容策略、作品、滚动叠卡案例、增长数据、客户评价、工作经历与本地联系表单。', accentColor: '#ff5a36', cover: '/templates/benjamen/screenshots/desktop-home.webp', screenshots: [{src:'/templates/benjamen/screenshots/desktop-home.webp',alt:'Benjamen desktop home',device:'desktop',width:1440,height:1000}],
 surfaces: [{id:'site',name:'作品集',platform:'pc',locales:['zh','en'],pages:[
 {slug:'',title:'首页',localizedTitles:{en:'Home'},load:()=>import('./pages/HomePage')},
 {slug:'privacy',title:'隐私政策',localizedTitles:{en:'Privacy Policy'},load:()=>import('./pages/PrivacyPage')},
 {slug:'changelog',title:'更新记录',localizedTitles:{en:'Changelog'},load:()=>import('./pages/ChangelogPage')}
 ]}]
}

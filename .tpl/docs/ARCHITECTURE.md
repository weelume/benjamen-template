# 架构

React / Next.js，feature-based。src/features/site-templates/catalog/benjamen 内 config/brand.ts 管品牌，content/data.ts 管双语集合，theme.css 管主题与响应式，components 管交互区块，pages 组合页面，meta.ts 注册路由。host.tsx 提供可选品牌注入，不依赖具体消费者。独立路由由 src/app/[[...slug]]/page.tsx 解析。

没有后端、数据库或真实发送。视频进入可视区播放、离开或页面隐藏暂停；自动播放受阻时显示控件并记录明确日志。

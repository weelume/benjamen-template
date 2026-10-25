# 原站动效对照清单

来源：公开预览区块脚本；已实测核心交互，尚未完成全区块三端逐帧对照。

| 区块 | 原站参数与行为 | 当前实现 |
|---|---|---|
|侧栏|x -20→0，0.7s，ease .16/1/.3/1，固定|Shell；活动指示跟随锚点|
|首屏|y16→0，0.6s；错峰 .12s，延迟 .1s|Hero|
|按钮|文字上翻 -24px/rotateX -90°，0.35s；按压 -20px/-45°|FlipLink/FlipButton；按规范无装饰箭头|
|人物视频|muted/loop/playsInline|Video；可见播放、离开/隐藏暂停|
|合作品牌|x 0→-680，32s 线性循环|CSS 同参数，支持聚焦暂停|
|关于|逐字 .012s，delay .15；spring 24/150；78+ 1.2s|Letters/Count|
|关于图组|进度0→.25 rotateX -70→0、scale .85→1；.35→.65宽/高扩展，.38→.58遮罩显现；手机顺序布局|About 使用同时间线，宽度按容器比例换算；桌面视频结束高度740px，待逐帧视口对照|
|服务|卡片错峰 .12s；图片 opacity 0→1 scale1→1.04，1.3s；文字颜色 .9s|Expertise；文字移动细节待实测|
|作品|滚动入场，错峰 .15；hover scale1.05/rotate2°，.6s；tap1.08|Works|
|案例桌面|三个叠卡，progress .05/.45/.9，y493→80与986→573→160；scale .92/.96|Cases|
|案例手机/平板|按钮/点切换；opacity/scale .98→1，.4s；数字1.2s|Cases；支持方向键|
|指标|可视时1.2s二次缓出计数；填充93/55/18，hover100；spring35/25/mass1.8|Results|
|评价|四条循环手动切换，字符opacity/scale .94，.12s；身份y4，.45s|Testimonials；字符delay .004s，待逐帧比较|
|经历|滚动入场，列表错峰 .1s，hover位移|Experience|
|表单/CTA|逐字入场、表单y30 .8s；CTA背景hover1.04/tap1.08|Contact/CTA；本地校验替代原alert|
|页脚|逐字 .03s，spring18/120，重复触发|Letters repeat；创建者徽章按品牌适配|

系统减少动态：MotionConfig reducedMotion=user，CSS禁用循环/过渡，视频手动播放，案例展开列表。没有原站拖拽或FAQ，不添加。页面切换为 Next Link，原站是单页锚点，无可证实的整页退场效果。

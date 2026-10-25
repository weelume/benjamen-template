import type { Bilingual } from '../config/brand'
export const text = (zh: string, en: string): Bilingual => ({ zh, en })
export const navigation = [
  ['home', text('首页', 'Home')], ['about', text('关于我', 'About me')], ['expertise', text('核心专长', 'Expertise')], ['featured-work', text('精选作品', 'Featured Work')], ['case-studies', text('案例研究', 'Case Studies')], ['results', text('增长成果', 'Results')], ['testimonials', text('客户评价', 'Testimonials')], ['experience', text('工作经历', 'Experience')], ['contacts', text('联系我', 'Contact')],
] as const
export const copy = {
  role: text('社交媒体营销顾问', 'Social Media Marketing Manager'), greeting: text('你好 我是', "Hey there. I’m"),
  intro: text('以内容策略、社群互动和社交媒体营销，帮助品牌持续成长。', 'Helping brands grow through strategic content, audience engagement, and social media marketing.'),
  available: text('欢迎洽谈新项目', 'Available for new projects'), book: text('预约项目沟通', 'Book a Discovery Call'), rating: text('获得 25+ 位客户的认可', 'Rated by 25+ happy clients'),
  promise: text('通过内容、社交媒体策略和效果营销驱动增长', 'DRIVING GROWTH THROUGH CONTENT, SOCIAL MEDIA STRATEGY, AND PERFORMANCE MARKETING.'),
  about: text('我以策略为起点，以内容建立连接，帮助品牌在社交媒体上找到自己的声音，将每一次互动转化为真实、持久的增长。', 'I help brands grow through strategic content, social media marketing, and audience engagement—creating systems that turn visibility into measurable growth.'),
  trust: text('品牌、初创团队和个人创作者信任我的策略，一起提升触达、互动和线上影响力。', 'Brands, startups, and personal brands have trusted my strategies to improve reach, engagement, and online visibility.'),
  metrics: text('追踪表现、衡量互动，从社交媒体数据和受众行为中发现新的增长机会。', 'Track performance, measure engagement, and uncover growth opportunities through data-driven social media insights and audience behavior analysis.'),
  contact: text('一起打造连接受众、强化品牌，并带来可衡量增长的社交媒体策略。', 'Let’s create a social media strategy that connects with your audience, strengthens your brand, and delivers measurable growth.'),
  cta: text('准备好扩大社交影响力，与真正属于你的受众建立持久的品牌连接了吗', 'Ready to supercharge your social reach and forge real, lasting brand connections with your target audience?'),
}
export const services = [
  { title: text('内容策略', 'CONTENT STRATEGY'), description: text('从受众价值出发，建立统一的品牌表达和跨平台内容计划，让每一次曝光都带来真实的品牌积累。', 'Developing robust content blueprints that connect with audience values, establishing uniform voice, and designing multi-channel plans designed to turn visibility into real brand traction.') },
  { title: text('受众增长', 'AUDIENCE GROWTH'), description: text('结合平台特点设计增长策略，以持续、有意义的互动建立活跃社群，扩大品牌触达。', 'Building engaged communities and increasing reach through platform-specific growth strategies and consistent audience engagement.') },
  { title: text('社交媒体管理', 'SOCIAL MEDIA MANAGEMENT'), description: text('以内容日历、多平台监测和日常数据追踪，持续提升品牌的线上可见度。', 'Managing custom high-frequency content calendars, multi-platform monitoring protocols, creative engagement systems, and daily tracking metrics to maximize digital visibility.') },
  { title: text('效果营销', 'PERFORMANCE MARKETING'), description: text('通过受众细分、创意测试和转化漏斗优化，让营销投入获得可衡量的回报。', 'Optimizing overall advertising investments through data-driven audience segments, automated funnel tweaks, creative variant tests, and detailed revenue reporting systems.') },
  { title: text('社群建设', 'COMMUNITY BUILDING'), description: text('通过互动活动、用户共创和真实对话，为品牌支持者建立可以长期参与的空间。', 'Nurturing highly collaborative client environments, designing organic group platforms, hosting interactive virtual events, and creating spaces where brand loyalists can thrive.') },
  { title: text('营销活动执行', 'CAMPAIGN EXECUTION'), description: text('从创意策划与脚本，到多平台上线与分析复盘，完整执行每一次品牌营销活动。', 'Executing synchronized multi-channel digital campaigns from early-stage design sprints and creative scripting to live platform deployment and continuous analytical metrics.') },
]
export const works = [
  { name: 'PURELY PLANTS', type: text('植物生活品牌', 'Plant Store') }, { name: 'DECORLY', type: text('家居装饰品牌', 'Home Decor Brand') }, { name: 'WEARIFY', type: text('电子商务品牌', 'E-commerce Store') }, { name: 'OUTFITZ', type: text('时尚品牌', 'Fashion Brand') },
]
export const cases = [
  { title: text('PURELY PLANTS 增长计划', 'PURELY PLANTS GROWTH CAMPAIGN'), intro: text('结合内容优化、社群互动和话题策略，让植物生活品牌获得自然增长。', 'A targeted Instagram growth strategy that focused on content optimization, community engagement, and hashtag targeting to increase reach and followers organically.'), challenge: text('粉丝基数小、更新不稳定，在竞争激烈的品类中互动不足。', 'Low follower count, inconsistent posting, and limited engagement in a competitive niche'), solution: text('内容支柱、短视频策略、社群互动与精准话题组合。', 'Content pillars, Reels strategy, community engagement, and smart hashtag targeting'), values: [312, 312], labels: [text('粉丝增长', 'Increase in Followers'), text('互动增长', 'Increase in Engagement')] },
  { title: text('DECORLY 内容与品牌影响力', 'DECORLY CONTENT & BRAND VISIBILITY'), intro: text('以内容策略和品牌叙事，提升可见度，建立清晰的品牌形象。', 'A content strategy and brand storytelling approach that increased visibility, strengthened brand identity, and drove consistent engagement across platforms.'), challenge: text('品牌知名度低，互动不足，品牌信息不够清晰。', 'Low brand awareness, minimal engagement, and unclear brand messaging'), solution: text('故事内容、主题日历、创作者合作与受众对话。', 'Story-driven content, theme-based calendar, influencer collaboration, and audience interaction'), values: [248, 198], labels: [text('触达增长', 'Increase in Reach'), text('互动增长', 'Increase in Engagement')] },
  { title: text('FITZONE 社交媒体营销', 'FITZONE SOCIAL MEDIA CAMPAIGN'), intro: text('通过互动内容和活动，提高品牌认知、获取线索并建立活跃的健身社群。', 'A social media campaign designed to boost brand awareness, generate leads, and build an active fitness community through engaging content and promotions.'), challenge: text('互动低、触达有限，与社群之间缺少真实连接。', 'Low engagement, limited reach, and weak community connection'), solution: text('系列内容、用户共创、挑战活动与定向推广。', 'Engaging content series, user-generated content, challenges, and targeted promotions'), values: [290, 217], labels: [text('触达增长', 'Increase in Reach'), text('线索增长', 'Increase in Leads')] },
]
export const results = [
  { value: 10, suffix: 'M+', height: 93, title: text('累计内容触达', 'Total Reach Generated'), detail: text('通过内容策略、社群互动和社交媒体增长，帮助品牌扩大影响力。', 'Helping brands expand visibility through strategic content, community engagement, and social media growth.'), label: text('社交媒体', 'Instagram') },
  { value: 179, suffix: 'K+', height: 55, title: text('新增关注者', 'Followers Grown'), detail: text('以平台专属增长策略和持续内容执行，建立活跃的受众群体。', 'Building engaged audiences through platform-specific growth strategies and consistent content execution.'), label: text('受众增长', 'Audience Growth') },
  { value: 200, suffix: '+', height: 18, title: text('已执行营销活动', 'Campaigns Managed'), detail: text('以内容营销、广告活动和表现追踪，交付可衡量的增长结果。', 'Delivering measurable results through content marketing, paid campaigns, and performance tracking.'), label: text('营销活动', 'Campaigns') },
]
export const reviews = [
  { name: 'Jessica Martinez', role: text('Bloom & Co. 创始人', 'Founder, Bloom & Co.'), quote: text('你的社交媒体策略帮助我们找到正确的受众，实现持续增长。互动、品牌认知和整体表现都有明显提升。专业、可靠，值得推荐。', 'YOUR SOCIAL MEDIA STRATEGY HELPED US REACH THE RIGHT AUDIENCE AND ACHIEVE CONSISTENT GROWTH. WE SAW A NOTICEABLE INCREASE IN ENGAGEMENT, BRAND AWARENESS, AND OVERALL PERFORMANCE. PROFESSIONAL, RELIABLE, AND HIGHLY RECOMMENDED.') },
  { name: 'David K.', role: text('Luxo 营销总监', 'Marketing Director, Luxo'), quote: text('本杰明交付了出色的成果。我们的社交账号新增超过十五万关注者，高质量互动、策略定位和统一的品牌形象推动了持续增长。', 'BENJAMEN DELIVERED EXCEPTIONAL RESULTS. OUR INSTAGRAM REACH GREW BY OVER 150K FOLLOWERS—IT FELT LIKE MAGIC. THE QUALITY OF AUDIENCE ENGAGEMENT, STRATEGIC BRAND POSITIONING, AND STEADY IDENTITY FOR OUR VISUAL GROWTH IS SUPERB.') },
  { name: 'Sophia Vance', role: text('TrendHive 首席执行官', 'CEO, TrendHive'), quote: text('增长和内容策略的专业经验，让我们的账号变成了高效的线索来源。品牌表达始终统一，每个平台的互动表现都有了明显提升。', 'INVALUABLE EXPERTISE IN SOCIAL MEDIA GROWTH AND CONTENT PILLARS. CONVERTED OUR STRUGGLING FEED INTO A HIGH-PERFORMING LEAD GENERATION MACHINE, WITH STEADY BRAND IDENTITY AND PHENOMENAL ENGAGEMENT ACROSS ALL OF OUR CHANNELS.') },
  { name: 'Marcus Brody', role: text('GymPeak 创始人', 'Founder, GymPeak'), quote: text('专业、敏捷，且富有策略思维。受众增长超出预期，两个季度内带来312%的直接客户注册增长。', 'HE IS PROFESSIONAL, AGILE, AND HIGHLY STRATEGIC. THE AUDIENCE GROWTH REACHED BEYOND ALL EXPECTATIONS, BOOSTING DIRECT CLIENT SIGNUPS BY 312% OVER TWO QUARTERS. HIGHLY RECOMMENDED TO ANY BRAND GROWING THEIR DIGITAL OUTREACH.') },
]
export const experience = [
  { role: text('社交媒体经理', 'SOCIAL MEDIA MANAGER'), agency: 'BrandWave Agency', period: text('2024 — 至今', '2024 — Current') }, { role: text('内容策略师', 'CONTENT STRATEGIST'), agency: 'Creative Pulse', period: text('2023 — 2024', '2023 — 2024') }, { role: text('社群经理', 'COMMUNITY MANAGER'), agency: 'SocialBuzz Studio', period: text('2022 — 2023', '2022 — 2023') }, { role: text('社交媒体经理', 'SOCIAL MEDIA MANAGER'), agency: text('多个品牌客户', 'Various Clients'), period: text('2021 — 2022', '2021 — 2022') },
]

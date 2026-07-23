import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

const files = {
  index: read('index.html'),
  home: read('components/Home.tsx'),
  hero: read('components/Hero.tsx'),
  navbar: read('components/Navbar.tsx'),
  products: read('components/ProductsPage.tsx'),
  support: read('components/SupportPage.tsx'),
  news: read('components/NewsPage.tsx'),
  technology: read('components/TechnologyPage.tsx'),
  solutions: read('components/SolutionsPage.tsx'),
  about: read('components/AboutPage.tsx'),
  cooperation: read('components/CooperationPage.tsx'),
  footer: read('components/Footer.tsx'),
  forum: read('components/ForumPage.tsx'),
  language: read('components/LanguageContext.tsx'),
};

const required = {
  home: [
    '真实现场里的康康',
    'Rolling Moments',
    '很多关心，不该只停在',
    '微信和电话里',
    '早上该起床了，康康先去叫一声',
    '晚上睡前，家人的一句话也能到家里',
    '了解心忆',
    '想知道康康适不适合你家？',
    '/image/events/shanghai-booth.webp',
    '/image/events/yabuli-stage.webp',
  ],
  hero: [
    '让每个人都有爱与陪伴',
    '/video/banner.webm',
    '/video/banner.mp4',
    'lg:block',
    'lg:hidden',
    'top-[54%]',
    'h-full w-full object-cover object-center',
    '#f6e2c8',
    'h-[calc(100dvh-72px)]',
    'justify-start',
    'text-left',
    '-translate-y-[clamp(28px,4vh,56px)]',
    'WebkitMaskImage',
    'object-right',
  ],
  index: ['<title>心忆科技-居家陪伴机器人专家</title>'],
  navbar: [
    '首页',
    '产品',
    '科技',
    '场景方案',
    '最新资讯',
    '具身智能论坛社区',
    '关于我们',
    '商务合作',
    '<div className="flex flex-shrink-0 items-center"',
  ],
  products: [
    '用 AI 陪伴，把家人的关心留在身边',
    '心忆康康：陪在父母身边的 AI 居家陪伴机器人',
    '心忆康康：产品方案',
    '主动找人主动跟随',
    '心忆康康守护版',
    "price: '7999'",
    '/image/v4/kangkang-hero.jpg',
    '心忆同启 APP：子女手机里的家庭关怀入口',
    '新产品尽请期待',
    '陪在父母身边的 AI 生活伙伴',
    '把康康连接到家庭',
    '话题娱乐',
    '有兴趣，有话聊，对生活保持好奇。',
    '让父母的生活方式多样化，查查天气、听听新闻、音乐和科普养生知识，让日常更有内容，也更有回应。',
    '/products/kangkang',
    '/products/app',
    '/products/future',
  ],
  support: [
    '下载心忆同启 APP',
    'Android 下载',
    'iOS 版本',
    '联系客服',
    '隐私政策与用户协议',
  ],
  news: [
    '公众号同步',
    '精选资讯',
    '精选资讯与公众号动态',
    '关注公众号，查看更完整的动态',
    '观众现场了解康康机器人',
    '参与青年创新赛事',
    '论坛活动中的产品合影',
    '/image/events/ceibs-group.webp',
  ],
  technology: [
    '少一点技术名词，多一点家属放心',
    '让父母更容易开口',
    '家庭数据先授权再使用',
    '功能持续开发',
  ],
  solutions: [
    '让关心进入不同家庭的日常',
    '异地子女',
    '多个家人，共用一个关怀入口',
    '联系机构合作',
  ],
  about: [
    '北京心忆科技有限公司',
    '创始人团队',
    '科研团队',
    '公司发展历程',
  ],
  cooperation: [
    '商务合作咨询',
    '渠道合作',
    '机构落地',
  ],
  footer: [
    '北京市海淀区中关村 AI 北纬社区 D5A-301 室',
    '市场渠道：17600222898',
    '公众号同步',
    '活动曝光',
  ],
  forum: [
    '具身智能论坛社区',
    '来看看你喜欢的话题',
    '内容分类',
    '社区动态',
    '推荐关注',
  ],
};

const forbidden = {
  hero: [
    '心忆康康 AI 居家陪伴机器人',
    '给爸妈一个会回应的陪伴',
    '康康放在父母家',
    '了解康康',
    '预约产品演示',
    'h-[clamp(520px,37.5vw,760px)]',
    'justify-center',
    'text-center',
    'absolute inset-0 bg-[linear-gradient(90deg,#f6e2c8_0%',
    'max-md:-right-[46vw]',
    'max-md:w-[142vw]',
    'md:block',
    'md:hidden',
    'h-full w-auto max-w-none',
    'Link',
  ],
  home: [
    '康康的每一次亮相，都让关怀更具体',
    '精选资讯与公众号动态',
    '关注公众号，查看更完整的动态',
    '康康进入家庭生活节奏',
    '康康不是放在家里的摆件',
    '心忆康康在父母身边，心忆同启 APP 在子女手机里',
  ],
  navbar: [
    '<button className="flex flex-shrink-0 items-center" onClick={goHome}',
    '服务与支持',
    'Globe',
    'aria-label="Language"',
    '<span className="ml-1 text-xs font-bold uppercase">EN</span>',
  ],
  products: [
    'V1.0 基础必做能力',
    '基础必做能力',
    '产品要能独立跳转',
    '功能区做成有层次的模块',
    '产品页不展示',
    '内部研发',
    'APP 视频展示区',
    '用于承接后续',
  ],
  footer: ['真实办公地址待补充', 'CEO：', '18500190368'],
  language: ['公司 CEO', '18500190368'],
};

const missing = Object.entries(required).flatMap(([key, phrases]) =>
  phrases
    .filter((phrase) => !files[key].includes(phrase))
    .map((phrase) => `${key}: ${phrase}`),
);

const forbiddenHits = Object.entries(forbidden).flatMap(([key, phrases]) =>
  phrases
    .filter((phrase) => files[key].includes(phrase))
    .map((phrase) => `${key}: ${phrase}`),
);

const responsiveHeroSourceCounts = {
  '/video/banner.webm': files.hero.split('/video/banner.webm').length - 1,
  '/video/banner.mp4': files.hero.split('/video/banner.mp4').length - 1,
};

if (missing.length > 0) {
  console.error(`Missing required conversion content:\n- ${missing.join('\n- ')}`);
  process.exit(1);
}

if (forbiddenHits.length > 0) {
  console.error(`Found public-site wording/structure that should be removed:\n- ${forbiddenHits.join('\n- ')}`);
  process.exit(1);
}

if (Object.values(responsiveHeroSourceCounts).some((count) => count !== 2)) {
  console.error(
    `Desktop-framed banner sources must serve both desktop and mobile video elements:\n${JSON.stringify(responsiveHeroSourceCounts, null, 2)}`,
  );
  process.exit(1);
}

console.log('Conversion content check passed.');

import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

const files = {
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
};

const required = {
  home: [
    '真实现场里的康康',
    'Rolling Moments',
    '很多关心，不该只停在微信和电话里',
    '早上该起床了，康康先去叫一声',
    '晚上睡前，家人的一句话也能到家里',
    '精选资讯与公众号动态',
    '关注公众号，查看更完整的动态',
    '了解心忆',
    '想知道康康适不适合你家？',
    '/image/events/shanghai-booth.webp',
    '/image/events/yabuli-stage.webp',
  ],
  hero: [
    '给爸妈一个会回应的陪伴',
    '了解康康',
    '预约产品演示',
    '查看版本价格',
    '/image/v4/scene-1.jpg',
  ],
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
    '心忆同启 APP：子女手机里的家庭关怀入口',
    '新产品尽请期待',
    '陪在父母身边的 AI 生活伙伴',
    '把康康连接到家庭',
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
    '上海老博会',
    '亚布力创新大赛',
    '中欧国际论坛',
    '/image/events/ceibs-group.webp',
  ],
  technology: [
    '少一点技术名词，多一点家属放心',
    '让父母更容易开口',
    '家庭数据先授权再使用',
    '测试中功能要标注清楚',
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
    '产品与场景',
    '论坛活动',
  ],
};

const forbidden = {
  home: ['康康的每一次亮相，都让关怀更具体'],
  navbar: ['<button className="flex flex-shrink-0 items-center" onClick={goHome}', '服务与支持'],
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
  footer: ['真实办公地址待补充'],
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

if (missing.length > 0) {
  console.error(`Missing required conversion content:\n- ${missing.join('\n- ')}`);
  process.exit(1);
}

if (forbiddenHits.length > 0) {
  console.error(`Found public-site wording/structure that should be removed:\n- ${forbiddenHits.join('\n- ')}`);
  process.exit(1);
}

console.log('Conversion content check passed.');

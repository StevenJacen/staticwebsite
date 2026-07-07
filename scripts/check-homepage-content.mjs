import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

const files = {
  home: read('components/Home.tsx'),
  navbar: read('components/Navbar.tsx'),
  products: read('components/ProductsPage.tsx'),
  support: read('components/SupportPage.tsx'),
  news: read('components/NewsPage.tsx'),
  technology: read('components/TechnologyPage.tsx'),
  solutions: read('components/SolutionsPage.tsx'),
  about: read('components/AboutPage.tsx'),
  cooperation: read('components/CooperationPage.tsx'),
  footer: read('components/Footer.tsx'),
};

const required = {
  home: [
    '康康的每一次亮相，都让关怀更具体',
    '活动影像持续滚动',
    'Rolling Moments',
    '精选资讯与公众号动态',
    '关注公众号，查看更完整的动态',
    '从产品开始了解心忆',
    '/image/events/shanghai-booth.webp',
    '/image/events/yabuli-stage.webp',
  ],
  navbar: [
    '首页',
    '产品',
    '科技',
    '场景方案',
    '最新资讯',
    '关于我们',
    '商务合作',
    '<div className="flex flex-shrink-0 items-center"',
  ],
  products: [
    '用 AI 陪伴，把家人的关心留在身边',
    '心忆康康：居家陪伴机器人',
    '心忆同启 APP：装在手机里的家庭关怀助手',
    '持续拓展的家庭关怀产品线',
    '陪在父母身边的 AI 生活伙伴',
    '手机端的家庭关怀体验',
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
    '让陪伴更自然',
    '隐私优先',
    '辅助判断',
  ],
  solutions: [
    '给不同家庭和机构的落地方式',
    '异地子女',
    '社区康养',
  ],
  about: [
    '让 AI 陪伴拥有温度',
    '面向年轻家属',
    '北京心忆科技有限公司',
  ],
  cooperation: [
    '商务合作咨询',
    '渠道合作',
    '机构落地',
  ],
  footer: [
    '北京市海淀区永捷南路 2 号院 2 号楼',
    '公众号同步',
    '活动曝光',
  ],
};

const forbidden = {
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

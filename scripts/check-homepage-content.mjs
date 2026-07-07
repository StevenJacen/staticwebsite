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
    '给不常在父母身边的你',
    '为什么子女会选择心忆康康',
    '心忆康康 + 心忆同启 APP',
    '品牌动态与活动曝光',
    '宣传素材占位',
    '近期动态占位',
  ],
  navbar: [
    '首页',
    '产品',
    '科技',
    '场景方案',
    '资讯',
    '关于我们',
    '服务与支持',
    '商务合作',
    '<div className="flex flex-shrink-0 items-center"',
  ],
  products: [
    '给子女看的产品说明',
    '心忆康康',
    '心忆同启 APP',
    '未来产品预留',
    '五娃娃长图素材占位',
    '手机界面素材占位',
    'APP 演示视频占位',
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
    '产品动态',
    '合作进展',
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
    '真实办公地址待补充',
    '公众号同步',
    '活动曝光',
  ],
};

const forbidden = {
  navbar: ['<button className="flex flex-shrink-0 items-center" onClick={goHome}'],
  products: ['V1.0 基础必做能力', '基础必做能力'],
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

import { readFileSync } from 'node:fs';

const home = readFileSync('components/Home.tsx', 'utf8');
const navbar = readFileSync('components/Navbar.tsx', 'utf8');
const products = readFileSync('components/ProductsPage.tsx', 'utf8');
const support = readFileSync('components/SupportPage.tsx', 'utf8');
const news = readFileSync('components/NewsPage.tsx', 'utf8');
const technology = readFileSync('components/TechnologyPage.tsx', 'utf8');
const solutions = readFileSync('components/SolutionsPage.tsx', 'utf8');
const about = readFileSync('components/AboutPage.tsx', 'utf8');
const cooperation = readFileSync('components/CooperationPage.tsx', 'utf8');

const requiredHomePhrases = [
  '给不常在父母身边的你',
  '把关心留在爸妈身边',
  '为什么子女会选择心忆康康',
  '心忆康康 + 心忆同启 APP',
  '下载 APP',
  '咨询购买',
];

const requiredNavPhrases = [
  '心忆康康',
  '心忆同启 APP',
  '服务与支持',
  '商务合作',
];

const requiredProductPhrases = [
  '给子女看的产品说明',
  '不是替代亲情',
  '心忆康康',
  '心忆同启 APP',
  '未来产品预留',
  '下载心忆同启 APP',
];

const forbiddenProductPhrases = [
  'V1.0 基础必做能力',
  '基础必做能力',
];

const requiredSupportPhrases = [
  '下载心忆同启 APP',
  'Android 下载',
  'iOS 版本',
  '联系客服',
  '隐私政策与用户协议',
];

const requiredNewsPhrases = [
  '公众号同步',
  '精选资讯',
  '产品动态',
  '合作进展',
];

const requiredTechnologyPhrases = [
  '让陪伴更自然',
  '隐私优先',
  '辅助判断',
];

const requiredSolutionsPhrases = [
  '给不同家庭和机构的落地方式',
  '异地子女',
  '社区康养',
];

const requiredAboutPhrases = [
  '让 AI 陪伴拥有温度',
  '面向年轻家属',
  '北京心忆科技有限公司',
];

const requiredCooperationPhrases = [
  '商务合作咨询',
  '渠道合作',
  '机构落地',
];

const missing = [
  ...requiredHomePhrases.filter((phrase) => !home.includes(phrase)),
  ...requiredNavPhrases.filter((phrase) => !navbar.includes(phrase)),
  ...requiredProductPhrases.filter((phrase) => !products.includes(phrase)),
  ...requiredSupportPhrases.filter((phrase) => !support.includes(phrase)),
  ...requiredNewsPhrases.filter((phrase) => !news.includes(phrase)),
  ...requiredTechnologyPhrases.filter((phrase) => !technology.includes(phrase)),
  ...requiredSolutionsPhrases.filter((phrase) => !solutions.includes(phrase)),
  ...requiredAboutPhrases.filter((phrase) => !about.includes(phrase)),
  ...requiredCooperationPhrases.filter((phrase) => !cooperation.includes(phrase)),
];

const forbidden = [
  ...forbiddenProductPhrases.filter((phrase) => products.includes(phrase)),
];

if (missing.length > 0) {
  console.error(`Missing required conversion content: ${missing.join(', ')}`);
  process.exit(1);
}

if (forbidden.length > 0) {
  console.error(`Found internal-facing product wording that should not be public: ${forbidden.join(', ')}`);
  process.exit(1);
}

console.log('Conversion content check passed.');

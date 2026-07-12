import React, { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Bot,
  ChevronRight,
  Clock3,
  Compass,
  Cpu,
  Database,
  Eye,
  Hand,
  LayoutGrid,
  MessageSquare,
  Search,
  UsersRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const categories = [
  { label: '综合', icon: LayoutGrid },
  { label: '交流讨论', icon: MessageSquare },
  { label: '论文', icon: BookOpen },
  { label: '数据集', icon: Database },
  { label: '前沿探索', icon: Compass },
  { label: '通用人形', icon: Bot },
  { label: '四足', icon: Cpu },
  { label: '灵巧操作', icon: Hand },
];

const forumPosts = [
  {
    category: '交流讨论',
    title: '具身智能如何进入真实家庭场景？',
    excerpt: '从移动空间、交互习惯到家庭成员授权，讨论机器人进入家庭前需要先回答的几个基础问题。',
    author: '心忆产品团队',
    date: '07-12',
    views: 826,
    image: '/image/v4/scene-1.jpg',
    tags: ['家庭场景', '产品讨论'],
  },
  {
    category: '前沿探索',
    title: '主动交互：不只等待唤醒的机器人体验',
    excerpt: '主动问候与主动提醒的价值，不在触发次数，而在是否符合用户设置、设备状态与真实生活节奏。',
    author: '交互研究组',
    date: '07-11',
    views: 642,
    image: '/image/v4/scene-4.jpg',
    tags: ['主动交互', '体验设计'],
  },
  {
    category: '论文',
    title: '空间智能与多模态交互研究速览',
    excerpt: '整理视觉、语音与空间感知相关研究方向，关注它们在机器人真实环境交互中的应用边界。',
    author: '心忆研究院',
    date: '07-10',
    views: 518,
    image: '/image/tech_1.png',
    tags: ['多模态', '空间智能'],
  },
  {
    category: '通用人形',
    title: '家庭机器人需要怎样的移动与避障能力？',
    excerpt: '门槛、地面材质、家具布局和网络环境都会影响实际体验，家庭部署需要从真实空间条件出发。',
    author: '机器人系统组',
    date: '07-09',
    views: 476,
    image: '/image/kangkang/robot-three-view.webp',
    tags: ['移动能力', '家庭部署'],
  },
  {
    category: '数据集',
    title: '家庭交互数据如何兼顾有效性与隐私？',
    excerpt: '数据采集、家庭成员权限和使用目的都需要提前说清，先授权、再连接是产品设计的基本前提。',
    author: '数据与隐私小组',
    date: '07-08',
    views: 391,
    image: '/image/tech_2.png',
    tags: ['数据权限', '隐私保护'],
  },
  {
    category: '灵巧操作',
    title: '从陪伴交互到生活协助，能力边界如何表达？',
    excerpt: '尚未正式开放的能力应明确标注规划中或测试中，避免把研究方向误解为已经交付的产品功能。',
    author: '社区编辑部',
    date: '07-07',
    views: 334,
    image: '/image/tech_3.png',
    tags: ['能力边界', '产品规划'],
  },
];

const communityUpdates = [
  ['产品讨论', '家庭机器人场景标准交流持续征集中'],
  ['活动预告', '具身智能与家庭交互主题分享筹备中'],
  ['社区共创', '欢迎提交论文、案例与产品实践'],
];

const recommendedAuthors = [
  ['心忆研究院', 'AI 与机器人研究'],
  ['机器人系统组', '移动与感知技术'],
  ['交互研究组', '主动交互体验'],
];

export const ForumPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('综合');
  const [mode, setMode] = useState<'推荐' | '最新'>('推荐');
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visiblePosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = forumPosts.filter((post) => {
      const categoryMatches = activeCategory === '综合' || post.category === activeCategory;
      const queryMatches = !normalizedQuery || `${post.title}${post.excerpt}${post.tags.join('')}`.toLowerCase().includes(normalizedQuery);
      return categoryMatches && queryMatches;
    });

    return mode === '推荐' ? filtered : [...filtered].sort((a, b) => b.date.localeCompare(a.date));
  }, [activeCategory, mode, query]);

  return (
    <div className="min-h-screen bg-[#f3f5f7] font-sans text-[#111827]">
      <Navbar />
      <main className="px-4 py-6 sm:px-6 lg:py-8">
        <div className="mx-auto max-w-7xl">
          <section className="relative min-h-[230px] overflow-hidden rounded-[8px] bg-[#102033] text-white">
            <img src="/image/v4/kangkang-hero.jpg" alt="心忆康康产品家族" className="absolute inset-0 h-full w-full object-cover object-[center_64%] opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#102033] via-[#102033]/82 to-[#102033]/15" />
            <div className="relative z-10 flex min-h-[230px] max-w-2xl flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-bold text-[#f5b96a]">具身智能论坛社区 · Embodied Intelligence Community</p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">来看看你喜欢的话题</h1>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/75">连接产品团队、研究者与行业伙伴，分享具身智能论文、数据、产品实践和真实场景观察。</p>
            </div>
          </section>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {categories.map((item) => (
              <button
                key={`mobile-${item.label}`}
                type="button"
                onClick={() => setActiveCategory(item.label)}
                className={`min-h-11 flex-none rounded-[6px] px-4 text-sm font-bold transition ${activeCategory === item.label ? 'bg-[#d94a38] text-white' : 'border border-[rgba(17,24,39,0.1)] bg-white text-[#667085]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[180px_minmax(0,1fr)_290px] lg:items-start">
            <aside className="sticky top-[92px] hidden rounded-[8px] border border-[rgba(17,24,39,0.08)] bg-white p-3 lg:block">
              <p className="px-3 py-2 text-xs font-bold text-[#98a2b3]">内容分类</p>
              <nav className="mt-1 space-y-1" aria-label="论坛内容分类">
                {categories.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveCategory(item.label)}
                    className={`flex min-h-11 w-full items-center gap-3 rounded-[6px] px-3 text-left text-sm font-bold transition ${activeCategory === item.label ? 'bg-[#fff1e7] text-[#d94a38]' : 'text-[#667085] hover:bg-[#f8f4ed] hover:text-[#111827]'}`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            <section aria-label="论坛内容列表">
              <div className="rounded-[8px] border border-[rgba(17,24,39,0.08)] bg-white p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-1">
                    {(['推荐', '最新'] as const).map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setMode(item)}
                        className={`min-h-11 rounded-[6px] px-5 text-sm font-bold transition ${mode === item ? 'bg-[#102033] text-white' : 'text-[#667085] hover:bg-[#f8f4ed]'}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <label className="flex min-h-11 items-center gap-2 rounded-[6px] border border-[rgba(17,24,39,0.12)] bg-[#fbfaf7] px-3 sm:w-[260px]">
                    <Search className="h-4 w-4 text-[#98a2b3]" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="搜索社区内容"
                      className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#98a2b3]"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-3 space-y-3">
                {visiblePosts.map((post) => (
                  <article key={post.title} className="grid gap-4 rounded-[8px] border border-[rgba(17,24,39,0.08)] bg-white p-4 transition hover:border-[#d94a38]/35 hover:shadow-[0_14px_38px_rgba(33,28,23,0.06)] sm:grid-cols-[138px_1fr] sm:p-5">
                    <img src={post.image} alt="" className="aspect-[16/10] h-full max-h-[110px] w-full rounded-[6px] object-cover" />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-[4px] bg-[#edf7fb] px-2 py-1 text-xs font-bold text-[#0f8190]">{post.category}</span>
                        {post.tags.map((tag) => <span key={tag} className="text-xs text-[#98a2b3]">#{tag}</span>)}
                      </div>
                      <h2 className="mt-3 text-lg font-black leading-7 text-[#111827]">{post.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-[#667085]">{post.excerpt}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#98a2b3]">
                        <span>{post.author}</span>
                        <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />{post.date}</span>
                        <span className="inline-flex items-center gap-1"><Eye className="h-3.5 w-3.5" />{post.views}</span>
                      </div>
                    </div>
                  </article>
                ))}
                {visiblePosts.length === 0 && (
                  <div className="rounded-[8px] border border-dashed border-[rgba(17,24,39,0.16)] bg-white px-6 py-16 text-center text-sm text-[#667085]">暂未找到相关内容，换个关键词试试。</div>
                )}
              </div>
            </section>

            <aside className="space-y-4 lg:sticky lg:top-[92px]">
              <section className="rounded-[8px] border border-[rgba(17,24,39,0.08)] bg-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-black">社区动态</h2>
                  <MessageSquare className="h-5 w-5 text-[#14b8c8]" />
                </div>
                <div className="mt-4 space-y-4">
                  {communityUpdates.map(([tag, title]) => (
                    <div key={title} className="border-b border-[rgba(17,24,39,0.07)] pb-4 last:border-0 last:pb-0">
                      <p className="text-xs font-bold text-[#d94a38]">{tag}</p>
                      <p className="mt-2 text-sm font-bold leading-6 text-[#344054]">{title}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[8px] border border-[rgba(17,24,39,0.08)] bg-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-black">推荐关注</h2>
                  <UsersRound className="h-5 w-5 text-[#14b8c8]" />
                </div>
                <div className="mt-4 space-y-4">
                  {recommendedAuthors.map(([name, desc]) => (
                    <div key={name} className="flex items-center gap-3">
                      <div className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#fff1e7] text-sm font-black text-[#d94a38]">{name.slice(0, 1)}</div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#111827]">{name}</p>
                        <p className="mt-1 text-xs text-[#98a2b3]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[8px] border border-[#f2c9aa] bg-[#fff1e7] p-5">
                <h2 className="text-lg font-black">加入社区交流</h2>
                <p className="mt-3 text-sm leading-6 text-[#667085]">提交论文、案例或合作话题，与心忆团队进一步沟通。</p>
                <Link to="/cooperation" className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[6px] bg-[#d94a38] px-4 text-sm font-bold text-white transition hover:bg-[#bd3f31]">
                  联系社区团队
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </section>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

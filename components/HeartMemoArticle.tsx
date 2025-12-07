import React from 'react';

// SVG 图标组件：用于还原设计图中的曲线装饰
const CurveLine = () => (
  <svg viewBox="0 0 300 50" className="w-3/4 h-auto my-4 opacity-50 text-gray-400 fill-none stroke-current" style={{ strokeWidth: 1 }}>
    <path d="M0,50 Q50,0 150,20 T300,10" />
  </svg>
);

const HeartMemoArticle = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* 限制最大宽度，模拟移动端或长图阅读体验 */}
      <div className="max-w-2xl mx-auto shadow-xl overflow-hidden bg-white">
        
        {/* === 头部 Header === */}
        <header className="bg-gradient-to-b from-blue-100 to-blue-50 px-8 pt-16 pb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-6 tracking-wide">
            心忆科技携手中欧创协团
          </h1>
          <p className="text-sm leading-7 text-slate-600 text-justify mb-4">
            心忆科技由三位中欧24级北京班校友联合创立，致力于通过“AI+心理学”的情感计算技术，研发能理解、回应人类情感的智能陪伴机器人，以科技提升老年人幸福感，让家人更安心。公司拥有跨学科的顶尖团队，核心研发由多位心理学与AI博士领衔。自今年6月启动以来发展迅速，现已入驻中关村AI北纬社区，并完成初期知识产权布局，计划于2025年12月发布首款MVP产品，2026年第二季度正式上市。
          </p>
        </header>

        {/* === 过渡 Slogan === */}
        <section className="py-12 px-8 flex flex-col items-center">
          <div className="flex items-start gap-4 mb-4">
            {/* 竖排 Logo 模拟 */}
            <div className="border border-gray-400 rounded-full px-2 py-4 flex flex-col items-center justify-center h-24">
              <span className="writing-vertical-lr text-xs text-gray-500 tracking-widest transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                HeartMem
              </span>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-700 mb-1">校友智慧赋能心忆</h2>
              <h2 className="text-2xl text-slate-400 font-light mb-2">共探情感科技未来</h2>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center uppercase tracking-wider">
            With Alumni Wisdom, We Pioneer the Future of Emotional Technology.
          </p>
        </section>

        {/* === 图片位 1 === */}
        <div className="w-full aspect-[16/9] bg-gray-200 flex items-center justify-center text-gray-400">
          <img src="/image/media/media-1.jpg" alt="中欧校友合影 1" className="w-full h-full object-cover" />
        </div>

        {/* === PART 01 === */}
        <section className="px-8 py-12">
          <div className="mb-2">
            <span className="text-5xl font-thin text-slate-700 block mb-2">PART 01</span>
            <h3 className="text-xl font-bold text-slate-800">中欧创协咨询小组走进心忆</h3>
            <p className="text-sm text-gray-500">开启了一场充满洞见与启发的“实战课堂”</p>
          </div>
          <CurveLine />
        </section>

        {/* === 图片位 2 === */}
        <div className="w-full aspect-[16/9] bg-gray-200 flex items-center justify-center text-gray-400">
           <img src="/image/media/media-2.jpg" alt="会议现场 1" className="w-full h-full object-cover" />
        </div>

        {/* === 蓝色渐变文本块 1 === */}
        <div className="bg-gradient-to-b from-blue-50 to-white px-8 py-10">
          <p className="text-sm leading-8 text-slate-600 text-justify">
            12月2日，心忆科技迎来了中欧创业协会咨询小组，开启了一场充满洞见与启发的“实战课堂”。由张凯、赵利军和刘宁邀请张燕、张敬、翟雪静、刘惠玲校友，以及创协伙伴李朝菲、周思进校友组成的咨询团队，进行了长达五个多小时的深度交流。
          </p>
        </div>

        {/* === PART 02 === */}
        <section className="px-8 py-10">
           <div className="mb-2 relative">
            <span className="text-5xl font-thin text-slate-700 block mb-2">PART 02</span>
            <h3 className="text-xl font-bold text-slate-800">热度升级，展开头脑风暴</h3>
            <p className="text-sm text-gray-500">从战略、市场、组织、技术等多维度开展</p>
            {/* 英文副标题 */}
            <div className="mt-8 text-right text-xs text-gray-400 max-w-xs ml-auto">
              To be driven from strategic, market, organizational, and technological perspectives.
            </div>
            <div className="absolute top-20 right-0 w-32 rotate-12 opacity-30">
                 <CurveLine />
            </div>
          </div>
        </section>

        {/* === 列表内容区 === */}
        <section className="px-8 pb-10">
          <div className="space-y-6">
            <ListItem 
              title="{战略与定位}" 
              desc="从3C（公司、顾客、竞争对手）模型出发，帮助梳理核心战略逻辑" 
            />
            <ListItem 
              title="{产品与市场切入}" 
              desc="探讨如何通过最小化产品（MVP）或轻量应用快速验证需求、触达用户" 
            />
            <ListItem 
              title="{组织与人才}" 
              desc="就初创期HR体系搭建与核心人才激励提出务实建议" 
            />
            <ListItem 
              title="{技术与数据}" 
              desc="针对情感大模型训练所需的数据采集、处理与隐私保护进行深入探讨" 
            />
             <ListItem 
              title="{资本与股权}" 
              desc="对公司股权架构的优化设计提供了长远视角的规划思路" 
            />
          </div>
        </section>

        {/* === 蓝色渐变文本块 2 === */}
        <div className="bg-gradient-to-b from-blue-100 to-blue-50 px-8 py-12 mb-10">
           <p className="text-sm leading-8 text-slate-700 text-justify">
             活动伊始，CEO张凯系统展示了心忆科技的商业计划与阶段性成果。随后的交流环节，迅速升温为一场真实、犀利且极具建设性的EMBA案例研讨。咨询校友们从战略、市场、组织、技术等多维度，展开了一场“头脑风暴”。
           </p>
        </div>

        {/* === PART 03 === */}
        <section className="px-8 py-8 relative">
           <div className="mb-2">
            <span className="text-5xl font-thin text-slate-700 block mb-2">PART 03</span>
            <h3 className="text-xl font-bold text-slate-800 flex items-center">
              第3弹 · 奔赴人间理想
              {/* 星星图标 */}
              <svg className="w-5 h-5 ml-2 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 1.95a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.95a1 1 0 00-1.175 0l-2.8 1.95c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </h3>
            <p className="text-sm text-gray-500">有望成为银发时代提升老年人幸福感的重要推动者</p>
          </div>
          <CurveLine />
          
          <div className="text-center text-xs text-gray-500 mt-6 mb-2 tracking-widest">
            A key force for improving seniors' happiness in the age of aging.
          </div>
        </section>

        {/* === 聚焦银发经济 === */}
        <div className="text-center py-6 bg-gradient-to-b from-white to-blue-50">
          <p className="text-slate-600 mb-2">聚焦“银发经济”、探索“AI+心理学”</p>
          <div className="text-2xl text-slate-300 font-light">&lt;</div>
        </div>

        {/* === 图片位 3 === */}
        <div className="w-full px-4 mb-8">
            <div className="w-full aspect-video bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center text-gray-400">
               <img src="/image/media/media-3.png" alt="产品演示/讨论" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* === 结尾长文 === */}
        <section className="bg-blue-50/50 px-8 py-10">
          <div className="space-y-6 text-sm leading-7 text-slate-700 text-justify">
            <p>
              校友们不仅直指关键问题，更以自身丰富的行业经验与市场敏感度，从潜在用户视角对产品功能、需求分层及市场拓展路径提出了多元见解，为心忆科技完善其商业蓝图注入了宝贵的“外部视角”与实战智慧。
            </p>
            <p>
              心忆科技的团队表示，此次交流收获远超预期。校友们“泼冷水”式的提问帮助他们避开了潜在盲区，而建设性的解决方案则直接拓宽了他们的战略思路。这种“毫无保留的分享与拍砖”，正是中欧校友网络最珍贵的价值。
            </p>
            <p>
              令人印象深刻的是，作为一家聚焦“银发经济”、探索“AI+心理学”深度融合的初创企业，心忆科技在短短三个月内，已在资金筹备、团队搭建、技术攻关与产品雏形方面取得了扎实进展，展现出强大的执行力与爆发潜力。
            </p>
            <p className="font-medium text-slate-800">
              以情感计算为核心的心忆科技，有望成为银发时代提升老年人幸福感的重要推动者。在中欧力量的滋养下，稳步成长，未来可期！
            </p>
          </div>
        </section>

        {/* === 底部 Footer === */}
        <footer className="pt-16 bg-white flex flex-col items-center">
          <div className="mb-6 text-center">
            <h4 className="text-xl font-serif text-slate-800 tracking-wider">HeartMemo</h4>
            <span className="text-sm text-slate-500">心忆科技</span>
          </div>
        </footer>

      </div>
    </div>
  );
};

// 辅助组件：列表项
const ListItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="border-b border-gray-200 pb-4 last:border-0">
    <h4 className="text-slate-700 font-medium mb-1 text-base">{title}</h4>
    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default HeartMemoArticle;

'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Line = { agent?: string; text: string; tone?: 'input' | 'ok' };

const scripts: { title: string; lines: Line[] }[] = [
	{
		title: '销售周报自动化',
		lines: [
			{ tone: 'input', text: '需求：每周一自动生成销售周报并推送给管理层' },
			{ agent: 'Planner', text: '拆解为 采集 → 清洗 → 分析 → 成文 四步' },
			{ agent: 'Research', text: '接入 CRM 与历史周报，对齐指标口径' },
			{ agent: 'Builder', text: '生成数据管道与报告模板' },
			{ agent: 'Reviewer', text: '抽样校验数据与结论一致性 ✓' },
			{ tone: 'ok', text: '已上线 · 每周一 09:00 自动推送' },
		],
	},
	{
		title: '内部知识库问答',
		lines: [
			{ tone: 'input', text: '需求：新员工能直接问出制度、流程与产品资料' },
			{ agent: 'Planner', text: '规划 文档采集 → 图谱构建 → 权限隔离' },
			{ agent: 'Research', text: '解析 PDF / Word / 网页，构建 GraphRAG' },
			{ agent: 'Builder', text: '接入企业 IM，支持引用溯源' },
			{ agent: 'Reviewer', text: '回归测试高频问题集 ✓' },
			{ tone: 'ok', text: '已私有化部署 · 全员可用' },
		],
	},
	{
		title: '短视频内容生产线',
		lines: [
			{ tone: 'input', text: '需求：素材到发布的全流程提效' },
			{ agent: 'Planner', text: '编排 选段 → 粗剪 → 字幕 → 分发' },
			{ agent: 'Editor', text: '按脚本自动粗剪，生成双语字幕' },
			{ agent: 'Builder', text: '接入多平台发布矩阵' },
			{ agent: 'Reviewer', text: '人工确认关键帧与标题 ✓' },
			{ tone: 'ok', text: '工作流已交付 · 创作者只需做判断' },
		],
	},
];

const agentColor: Record<string, string> = {
	Planner: 'text-[#8fd6c6]',
	Research: 'text-[#f1c27d]',
	Builder: 'text-[#9db8ff]',
	Editor: 'text-[#9db8ff]',
	Reviewer: 'text-[#e9a0c4]',
};

export function AgentConsole() {
	const [scriptIdx, setScriptIdx] = useState(0);
	const [count, setCount] = useState(0);
	const script = scripts[scriptIdx];

	useEffect(() => {
		const done = count >= script.lines.length;
		const t = setTimeout(
			() => {
				if (done) {
					setCount(0);
					setScriptIdx((i) => (i + 1) % scripts.length);
				} else {
					setCount((c) => c + 1);
				}
			},
			done ? 3200 : count === 0 ? 500 : 950,
		);
		return () => clearTimeout(t);
	}, [count, script.lines.length]);

	return (
		<div className='relative overflow-hidden rounded-[22px] bg-night text-[13px] text-white/80 shadow-[0_40px_80px_-30px_rgba(12,18,17,0.55),0_0_0_1px_rgba(255,255,255,0.06)_inset]'>
			{/* 顶栏 */}
			<div className='flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5'>
				<div className='flex items-center gap-1.5'>
					<span className='h-2.5 w-2.5 rounded-full bg-white/15' />
					<span className='h-2.5 w-2.5 rounded-full bg-white/15' />
					<span className='h-2.5 w-2.5 rounded-full bg-white/15' />
				</div>
				<span className='font-mono text-[11px] tracking-wide text-white/40'>
					qingyon / agent-runtime
				</span>
				<span className='flex items-center gap-1.5 font-mono text-[11px] text-[#8fd6c6]'>
					<span className='h-1.5 w-1.5 rounded-full bg-[#8fd6c6] [animation:pulse-dot_1.6s_ease-in-out_infinite]' />
					live
				</span>
			</div>

			{/* 任务标题 */}
			<div className='flex items-center justify-between px-5 pb-2 pt-5'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={script.title}
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -6 }}
						className='font-serif text-[18px] font-bold text-white'>
						{script.title}
					</motion.div>
				</AnimatePresence>
				<span className='font-mono text-[11px] text-white/35'>
					{String(scriptIdx + 1).padStart(2, '0')} / {String(scripts.length).padStart(2, '0')}
				</span>
			</div>

			{/* 进度 */}
			<div className='mx-5 h-[3px] overflow-hidden rounded-full bg-white/[0.06]'>
				<motion.div
					className='h-full rounded-full bg-linear-to-r from-[#3fa391] to-[#8fd6c6]'
					animate={{ width: `${(count / script.lines.length) * 100}%` }}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				/>
			</div>

			{/* 日志 */}
			<div className='min-h-[272px] space-y-2.5 px-5 py-5 font-mono text-[12.5px] leading-relaxed'>
				<AnimatePresence initial={false}>
					{script.lines.slice(0, count).map((line, i) => (
						<motion.div
							key={`${scriptIdx}-${i}`}
							initial={{ opacity: 0, x: -8 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4 }}
							className='flex gap-3'>
							{line.tone === 'input' ? (
								<>
									<span className='text-white/30'>›</span>
									<span className='text-white'>{line.text}</span>
								</>
							) : line.tone === 'ok' ? (
								<>
									<span className='text-[#8fd6c6]'>✓</span>
									<span className='rounded-sm bg-[#3fa391]/15 px-1.5 text-[#8fd6c6]'>{line.text}</span>
								</>
							) : (
								<>
									<span className={`w-[84px] shrink-0 whitespace-nowrap ${agentColor[line.agent!] ?? ''}`}>
										◆ {line.agent}
									</span>
									<span className='text-white/65'>{line.text}</span>
								</>
							)}
						</motion.div>
					))}
				</AnimatePresence>
				{count < script.lines.length && (
					<div className='flex gap-3'>
						<span className='text-white/30'>›</span>
						<span className='inline-block h-[15px] w-[7px] translate-y-[3px] bg-white/60 [animation:pulse-dot_1s_steps(1)_infinite]' />
					</div>
				)}
			</div>

			{/* 底部 agents */}
			<div className='flex flex-wrap items-center gap-2 border-t border-white/[0.07] px-5 py-3.5'>
				{['Planner', 'Research', 'Builder', 'Reviewer'].map((a) => (
					<span
						key={a}
						className='rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10.5px] text-white/50'>
						{a}
					</span>
				))}
				<span className='ml-auto font-mono text-[10.5px] text-white/30'>human-in-the-loop</span>
			</div>
		</div>
	);
}

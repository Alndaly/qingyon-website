// 三款产品的示意插画，纯 CSS / SVG 绘制，避免依赖截图。

export function RevornixVisual() {
	const nodes = [
		{ x: 50, y: 48, r: 9, main: true, label: '本周研报' },
		{ x: 20, y: 22, r: 5, label: 'PDF' },
		{ x: 80, y: 20, r: 5, label: '网页' },
		{ x: 86, y: 62, r: 5, label: 'API' },
		{ x: 16, y: 70, r: 5, label: 'Word' },
		{ x: 50, y: 86, r: 4, label: '播客' },
		{ x: 33, y: 40, r: 3 },
		{ x: 68, y: 38, r: 3 },
		{ x: 64, y: 70, r: 3 },
		{ x: 34, y: 66, r: 3 },
	];
	const edges = [
		[0, 6], [0, 7], [0, 8], [0, 9], [6, 1], [7, 2], [8, 3], [9, 4], [0, 5], [6, 7], [8, 9], [1, 6], [2, 7],
	];
	return (
		<div className='relative h-full min-h-[340px] w-full overflow-hidden rounded-[20px] bg-[#0f1a18]'>
			<div className='absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(143,214,198,0.18)_1px,transparent_1px)] [background-size:18px_18px]' />
			<svg viewBox='0 0 100 100' preserveAspectRatio='none' className='absolute inset-0 h-full w-full'>
				{edges.map(([a, b], i) => (
					<line
						key={i}
						x1={nodes[a].x}
						y1={nodes[a].y}
						x2={nodes[b].x}
						y2={nodes[b].y}
						stroke='rgba(143,214,198,0.35)'
						strokeWidth='0.3'
						vectorEffect='non-scaling-stroke'
					/>
				))}
			</svg>
			{nodes.map((n, i) => (
				<div
					key={i}
					className='absolute -translate-x-1/2 -translate-y-1/2'
					style={{ left: `${n.x}%`, top: `${n.y}%` }}>
					{n.main ? (
						<div className='relative flex items-center gap-2 rounded-full bg-[#8fd6c6] px-3.5 py-2 text-[12px] font-semibold text-[#0f1a18] shadow-[0_0_40px_rgba(143,214,198,0.55)]'>
							<span className='absolute inset-0 animate-ping rounded-full bg-[#8fd6c6]/30' />
							<span className='relative'>✦ {n.label}</span>
						</div>
					) : n.label ? (
						<div className='rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10.5px] text-white/70 backdrop-blur'>
							{n.label}
						</div>
					) : (
						<div className='h-2 w-2 rounded-full bg-[#8fd6c6]/70' />
					)}
				</div>
			))}
			<div className='absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 backdrop-blur'>
				<span className='font-mono text-[10.5px] text-white/50'>GraphRAG · 214 entities</span>
				<span className='font-mono text-[10.5px] text-[#8fd6c6]'>MCP connected</span>
			</div>
		</div>
	);
}

export function WeSmileVisual() {
	const feed = [
		{ tag: '树洞', color: 'bg-[#f3d9c9] text-[#9a4a2c]', text: '图书馆三楼靠窗的位置真的太适合复习了', meta: '匿名 · 128 赞' },
		{ tag: '活动', color: 'bg-qing-soft text-qing', text: '秋季社团招新 · 周六 14:00 大学生活动中心', meta: '已报名 236 / 300' },
		{ tag: '二手', color: 'bg-[#e4e1f5] text-[#4d4596]', text: '九成新考研资料一套，校内自取', meta: '¥ 45 · 东区' },
	];
	return (
		<div className='relative flex h-full min-h-[340px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-[#f3efe4] to-[#e3ede7]'>
			<div className='absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl' />
			<div className='relative w-[228px] rotate-[-3deg] rounded-[34px] border-[6px] border-ink bg-paper p-3 shadow-[0_30px_60px_-20px_rgba(17,22,21,0.4)]'>
				<div className='mx-auto mb-3 h-[18px] w-[70px] rounded-full bg-ink' />
				<div className='flex items-center justify-between px-1'>
					<span className='font-serif text-[15px] font-black'>微校</span>
					<span className='rounded-full bg-ink px-2 py-0.5 text-[9px] text-paper'>已认证</span>
				</div>
				<div className='mt-2.5 flex gap-1.5 px-1 text-[10px] text-ink-3'>
					<span className='rounded-full bg-ink px-2 py-0.5 text-paper'>本校</span>
					<span className='px-1 py-0.5'>本市</span>
					<span className='px-1 py-0.5'>全站</span>
				</div>
				<div className='mt-3 space-y-2'>
					{feed.map((f) => (
						<div key={f.tag} className='rounded-2xl bg-white p-2.5 shadow-[0_1px_2px_rgba(17,22,21,0.06)]'>
							<span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${f.color}`}>{f.tag}</span>
							<p className='mt-1.5 text-[11px] leading-snug text-ink'>{f.text}</p>
							<p className='mt-1 font-mono text-[9px] text-ink-3'>{f.meta}</p>
						</div>
					))}
				</div>
			</div>
			<div className='absolute right-[8%] top-[16%] rotate-[4deg] rounded-2xl border border-line bg-white px-3 py-2 shadow-lg'>
				<p className='text-[10px] text-ink-3'>本周 CP 匹配</p>
				<p className='font-serif text-[16px] font-black text-seal'>♥ 已配对</p>
			</div>
			<div className='absolute bottom-[14%] left-[7%] rotate-[-5deg] rounded-2xl border border-line bg-white px-3 py-2 shadow-lg'>
				<p className='text-[10px] text-ink-3'>课程评价</p>
				<p className='text-[12px] tracking-widest text-[#d9a441]'>★★★★★</p>
			</div>
		</div>
	);
}

export function MosaelVisual() {
	const tracks = [
		{ name: 'V1', clips: [[6, 30, 'bg-[#6f8dd8]'], [32, 58, 'bg-[#7fa0e8]'], [60, 94, 'bg-[#6f8dd8]']] },
		{ name: 'A1', clips: [[6, 94, 'bg-[#3fa391]']], wave: true },
		{ name: 'T1', clips: [[10, 26, 'bg-[#d9a441]'], [36, 52, 'bg-[#d9a441]'], [64, 86, 'bg-[#d9a441]']] },
	] as const;
	return (
		<div className='relative flex h-full min-h-[340px] w-full flex-col overflow-hidden rounded-[20px] bg-[#16181c] p-4'>
			{/* 预览窗口 + 无限画布 */}
			<div className='grid flex-1 grid-cols-[1fr_0.8fr] gap-3'>
				<div className='relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2c3e63] via-[#5a4a6e] to-[#d98f6b]'>
					<div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent' />
					<div className='absolute bottom-[30%] left-[18%] h-10 w-10 rounded-full bg-[#ffd9a8]/90 blur-[2px]' />
					<div className='absolute bottom-0 left-0 right-0 h-[28%] bg-[#1b2336] [clip-path:polygon(0_60%,20%_20%,38%_55%,58%_10%,80%_50%,100%_25%,100%_100%,0_100%)]' />
					<p className='absolute bottom-2 left-0 right-0 text-center text-[10px] text-white/90'>每个想法，都有自己的时间线</p>
					<span className='absolute left-2 top-2 rounded bg-black/40 px-1.5 py-0.5 font-mono text-[9px] text-white/70'>00:00:12:08</span>
				</div>
				<div className='relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#1d2025] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:12px_12px]'>
					<div className='absolute left-[10%] top-[12%] h-[34%] w-[46%] rotate-[-4deg] rounded-md bg-gradient-to-br from-[#5a4a6e] to-[#d98f6b]' />
					<div className='absolute right-[8%] top-[24%] rounded-md bg-[#fef3c7] px-2 py-1.5 text-[9px] text-[#78551b] shadow'>分镜 03 · 日落</div>
					<div className='absolute bottom-[12%] left-[14%] right-[12%] rounded-md border border-[#8fd6c6]/30 bg-[#8fd6c6]/10 px-2 py-1.5 font-mono text-[9px] text-[#8fd6c6]'>
						Agent › 为 3 个镜头生成字幕
					</div>
				</div>
			</div>
			{/* 时间线 */}
			<div className='relative mt-3 space-y-1.5 rounded-xl bg-[#1d2025] p-2.5'>
				<div className='mb-1 flex justify-between px-7 font-mono text-[8.5px] text-white/25'>
					<span>00:00</span>
					<span>00:05</span>
					<span>00:10</span>
					<span>00:15</span>
				</div>
				{tracks.map((t) => (
					<div key={t.name} className='flex items-center gap-2'>
						<span className='w-5 font-mono text-[9px] text-white/35'>{t.name}</span>
						<div className='relative h-5 flex-1 rounded bg-white/[0.03]'>
							{t.clips.map(([a, b, c], i) => (
								<div
									key={i}
									className={`absolute inset-y-0.5 rounded-[4px] ${c} ${'wave' in t ? 'opacity-70' : ''}`}
									style={{ left: `${a}%`, width: `${b - a}%` }}>
									{'wave' in t && (
										<div className='h-full w-full opacity-60 [background:repeating-linear-gradient(90deg,rgba(0,0,0,0.35)_0_1px,transparent_1px_4px)]' />
									)}
								</div>
							))}
						</div>
					</div>
				))}
				<div className='pointer-events-none absolute bottom-2 top-6 w-px bg-[#ff6b5a] [animation:playhead_8s_linear_infinite_alternate]'>
					<span className='absolute -left-[3px] -top-1 h-2 w-[7px] rounded-sm bg-[#ff6b5a]' />
				</div>
			</div>
		</div>
	);
}

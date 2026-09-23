import { services } from '@/content/site';
import { SectionHead } from './products';
import { Reveal } from './reveal';

export function Services() {
	return (
		<section id='services' className='relative overflow-hidden bg-night py-24 text-white md:py-32'>
			<div className='pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-qing/40 blur-[140px]' />
			<div className='pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]' />

			<div className='container-site relative'>
				<SectionHead
					light
					eyebrow='Services · 企业服务'
					title={
						<>
							不卖概念，
							<br className='hidden md:block' />
							把智能体交付到业务里。
						</>
					}
					desc='两种合作方式，可单独选择，也可组合：FDE 负责把第一个智能体快速做对、做上线；陪跑负责让你的团队长期具备 AI 能力。'
				/>

				<div className='mt-16 grid gap-5 lg:grid-cols-2'>
					{services.map((s, i) => (
						<Reveal key={s.key} delay={i * 0.1} className='h-full'>
							<article className='relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur md:p-10'>
								<div className='flex items-start justify-between gap-6'>
									<div>
										<span className='font-mono text-[11px] uppercase tracking-[0.16em] text-[#8fd6c6]'>
											{s.label}
										</span>
										<h3 className='mt-4 whitespace-nowrap font-serif text-[30px] font-black md:text-[40px]'>{s.title}</h3>
									</div>
									<span className='hidden font-serif text-[72px] font-black leading-none text-white/[0.06] sm:block md:text-[96px]'>
										{s.index}
									</span>
								</div>
								<p className='mt-5 max-w-[520px] text-[15px] leading-[1.85] text-white/65'>{s.summary}</p>

								<ul className='mt-9 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2'>
									{s.items.map((it) => (
										<li key={it.k} className='bg-night/90 p-5'>
											<p className='text-[14.5px] font-medium text-white'>{it.k}</p>
											<p className='mt-2 text-[13px] leading-relaxed text-white/50'>{it.v}</p>
										</li>
									))}
								</ul>

								<div className='mt-auto flex flex-wrap gap-x-10 gap-y-4 pt-9'>
									{s.meta.map((m) => (
										<div key={m.k}>
											<p className='font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/40'>{m.k}</p>
											<p className='mt-1.5 font-serif text-[22px] font-bold text-[#8fd6c6]'>{m.v}</p>
										</div>
									))}
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

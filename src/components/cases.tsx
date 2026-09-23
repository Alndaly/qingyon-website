import { cases } from '@/content/site';
import { SectionHead } from './products';
import { Reveal } from './reveal';

export function Cases() {
	return (
		<section id='cases' className='relative py-24 md:py-32'>
			<div className='container-site'>
				<SectionHead
					eyebrow='Cases · 智能体交付案例'
					title={
						<>
							已经跑在客户业务里的
							<br className='hidden md:block' />
							<span className='text-qing'>智能体</span>。
						</>
					}
					desc='以下为部分已交付项目的场景概述。出于保密协议，客户名称与业务数据已隐去，欢迎在沟通中了解更多细节与演示。'
				/>

				<div className='mt-16 grid gap-5 md:grid-cols-3'>
					{cases.map((c, i) => (
						<Reveal key={c.title} delay={i * 0.08} className='h-full'>
							<article className='group relative flex h-full flex-col rounded-[24px] border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:border-qing/30 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(29,107,98,0.35)]'>
								<div className='flex items-center justify-between'>
									<span className='rounded-full bg-qing-soft px-3 py-1 text-[12px] font-medium text-qing'>
										{c.tag}
									</span>
									<span className='flex items-center gap-1.5 font-mono text-[10.5px] text-ink-3'>
										<span className='h-1.5 w-1.5 rounded-full bg-qing-2' />
										已交付
									</span>
								</div>
								<h3 className='mt-8 font-serif text-[22px] font-bold leading-snug text-ink'>{c.title}</h3>
								<p className='mt-4 text-[14.5px] leading-[1.85] text-ink-2'>{c.body}</p>
								<div className='mt-auto flex flex-wrap gap-1.5 border-t border-dashed border-line pt-6'>
									{c.stack.map((s) => (
										<span key={s} className='font-mono text-[11px] text-ink-3'>
											#{s}
										</span>
									))}
								</div>
								<span className='pointer-events-none absolute bottom-4 right-6 font-serif text-[72px] font-black leading-none text-ink/[0.04]'>
									{String(i + 1).padStart(2, '0')}
								</span>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

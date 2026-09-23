// 印章式标识：朱红方印 + “青”字
export function Seal({ className = 'h-8 w-8' }: { className?: string }) {
	return (
		<span
			aria-hidden
			className={`${className} relative inline-flex shrink-0 items-center justify-center rounded-[6px] bg-seal font-serif text-[15px] font-black leading-none text-[#fbf3ea] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.18)]`}>
			青
		</span>
	);
}

export function Logo({ light = false }: { light?: boolean }) {
	return (
		<span className='inline-flex items-center gap-2.5'>
			<Seal />
			<span className='flex flex-col leading-none'>
				<span
					className={`font-serif text-[16px] font-bold tracking-[0.08em] ${light ? 'text-white' : 'text-ink'}`}>
					青庸科技
				</span>
				<span
					className={`mt-1 font-mono text-[9px] uppercase tracking-[0.28em] ${light ? 'text-white/50' : 'text-ink-3'}`}>
					Qingyon
				</span>
			</span>
		</span>
	);
}

export function ArrowUpRight({ className = 'h-4 w-4' }: { className?: string }) {
	return (
		<svg className={className} viewBox='0 0 16 16' fill='none' aria-hidden>
			<path d='M5 11L11 5M11 5H5.5M11 5V10.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	);
}

export function ArrowRight({ className = 'h-4 w-4' }: { className?: string }) {
	return (
		<svg className={className} viewBox='0 0 16 16' fill='none' aria-hidden>
			<path d='M3 8h10M9 4l4 4-4 4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	);
}

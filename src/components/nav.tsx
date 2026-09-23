'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav } from '@/content/site';
import { ArrowRight, Logo } from './logo';

export function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
				scrolled || open
					? 'border-b border-line bg-paper/80 backdrop-blur-xl'
					: 'border-b border-transparent'
			}`}>
			<div className='container-site flex h-[68px] items-center justify-between'>
				<a href='#top' aria-label='青庸科技 首页'>
					<Logo />
				</a>

				<nav className='hidden items-center gap-1 md:flex'>
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className='rounded-full px-4 py-2 text-[14px] text-ink-2 transition-colors hover:bg-ink/5 hover:text-ink'>
							{item.label}
						</a>
					))}
				</nav>

				<div className='flex items-center gap-2'>
					<a
						href='#contact'
						className='group hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-transform active:scale-95 sm:inline-flex'>
						预约沟通
						<ArrowRight className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
					</a>
					<button
						type='button'
						aria-label='打开菜单'
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
						className='flex h-10 w-10 items-center justify-center rounded-full md:hidden'>
						<span className='relative block h-3 w-5'>
							<span
								className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
							/>
							<span
								className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
							/>
						</span>
					</button>
				</div>
			</div>

			<AnimatePresence>
				{open && (
					<motion.nav
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className='overflow-hidden md:hidden'>
						<div className='container-site flex flex-col pb-6'>
							{[...nav, { label: '联系我们', href: '#contact' }].map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={() => setOpen(false)}
									className='border-b border-line py-4 font-serif text-[22px] font-bold'>
									{item.label}
								</a>
							))}
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}

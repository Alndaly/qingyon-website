import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Products } from '@/components/products';
import { Services } from '@/components/services';
import { Cases } from '@/components/cases';
import { About, Process } from '@/components/process';
import { Contact, Footer } from '@/components/contact';

export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Products />
				<Services />
				<Cases />
				<Process />
				<About />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'TicketE',
	description: 'Checkout your TicketE'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${openSans.className} text-grayscale-g-2`}>
				<div className='px-[120px]'>
					<Header />
					<main className='py-[100px]'>{children}</main>
				</div>
				<Footer />
			</body>
		</html>
	)
}

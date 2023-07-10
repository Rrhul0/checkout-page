import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
			<body className={`${inter.className} px-40 text-grayscale-g-2`}>
				<Header />
				<main className='py-[100px]'>{children}</main>
			</body>
		</html>
	)
}

import logo from '@/public/logo.svg'
import Image from 'next/image'
import Logo from './logo'
import instagramLogo from '@/public/instagram.svg'
import facebookLogo from '@/public/facebook.svg'
import twitterLogo from '@/public/twitter.svg'

export default function Footer() {
	return (
		<footer className='bg-black-fogra px-[120px]'>
			<h2 className='text-white text-4xl py-[66px]'>tickete</h2>
			<div className='border-b border-grayscale-g-5' />
			<div className='flex justify-between items-center'>
				<div className='flex gap-3 text-grayscale-g-7 pt-8 pb-10'>
					<a
						href='#'
						className=' underline'
					>
						© Tickete Inc.
					</a>
					<span>•</span>
					<a
						href='#'
						className=' underline'
					>
						Privacy
					</a>
					<span>•</span>
					<a
						href='#'
						className=' underline'
					>
						Terms
					</a>
					<span>•</span>
					<a
						href='#'
						className=' underline'
					>
						Cancellation policy
					</a>
				</div>
				<div className='flex gap-3'>
					<a href='#'>
						<Image
							src={instagramLogo}
							width={20}
							height={20}
							alt='instagram'
						/>
					</a>
					<a href='#'>
						<Image
							src={facebookLogo}
							width={20}
							height={20}
							alt='facebook'
						/>
					</a>
					<a href='#'>
						<Image
							src={twitterLogo}
							width={20}
							height={20}
							alt='twitter'
						/>
					</a>
				</div>
			</div>
		</footer>
	)
}

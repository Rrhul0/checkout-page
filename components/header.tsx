import logo from '@/public/logo.svg'
import questionMark from '@/public/question-mark.svg'
import Image from 'next/image'
import backImage from '@/public/back.svg'

export default function Header() {
	return (
		<header className='flex justify-between py-5 md:py-6 px-6 sm:px-16 md:px-0'>
			<Image
				src={logo}
				alt='tickete'
				width={76}
				height={24}
				priority
				className='hidden md:block'
			/>
			<Image
				src={backImage}
				alt='back'
				width={28}
				height={28}
				className='md:hidden'
			/>
			<div className='gap-1 hidden md:flex'>
				<Image
					src={questionMark}
					alt={'?'}
					width={20}
					height={20}
				/>
				<span>Help</span>
			</div>
		</header>
	)
}

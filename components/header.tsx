import logo from '@/public/logo.svg'
import questionMark from '@/public/question-mark.svg'
import Image from 'next/image'

export default function Header() {
	return (
		<header className='flex justify-between py-6'>
			<Image
				src={logo}
				alt='tickete'
				width={76}
				height={24}
				priority
			/>
			<div className='flex gap-1'>
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

import Image from 'next/image'
import chatImage from '@/public/chat.svg'

export default function Help() {
	return (
		<div className='w-[360px] rounded-xl bg-pumpkin/1 px-6 py-8 flex items-start justify-between'>
			<div className='flex flex-col gap-6 items-start text-pumpkin/10'>
				<div>
					<p className=' font-semibold text-lg'>Need help?</p>
					<p>We&apos;re here to help, 24*7</p>
				</div>
				<button className='border border-pumpkin/10 rounded-xl px-6 h-11'>
					Chat with us
				</button>
			</div>
			<Image
				src={chatImage}
				width={48}
				height={48}
				alt='chat'
			/>
		</div>
	)
}

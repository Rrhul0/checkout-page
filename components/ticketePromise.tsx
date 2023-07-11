import Image from 'next/image'
import circleWavyCheck from '@/public/CircleWavyCheck.svg'
import chatImage from '@/public/chat.svg'
import calanderImage from '@/public/calander.svg'
import shieldImage from '@/public/shieldBlue.svg'

export default function TicketePromise() {
	return (
		<div className='flex flex-col gap-8'>
			<h3 className='text-2xl font-semibold'>The Tickete promise</h3>
			<div className='flex gap-6'>
				<div className='border rounded-xl px-5 py-4 flex flex-col justify-between flex-1 h-[200px]'>
					<Image
						src={circleWavyCheck}
						height={48}
						width={48}
						alt=''
					/>
					<div>
						<h4 className='font-semibold'>Official tickets</h4>
						<p className='leading-6 text-grayscale-g-3'>
							Authorised reseller to top attraction
						</p>
					</div>
				</div>
				<div className='border rounded-xl px-5 py-4 flex flex-col justify-between flex-1 h-[200px]'>
					<Image
						src={chatImage}
						height={48}
						width={48}
						alt=''
					/>
					<div>
						<h4 className='font-semibold'>
							24/7 dedicated support
						</h4>
						<p className='leading-6 text-grayscale-g-3'>
							We&apos;re here to help, talk to an expert
						</p>
					</div>
				</div>
				<div className='border rounded-xl px-5 py-4 flex flex-col justify-between flex-1 h-[200px]'>
					<Image
						src={calanderImage}
						height={48}
						width={48}
						alt=''
					/>
					<div>
						<h4 className='font-semibold'>Flexible bookings</h4>
						<p className='leading-6 text-grayscale-g-3'>
							Book stress-free with easy cancellation
						</p>
					</div>
				</div>
				<div className='border rounded-xl px-5 py-4 flex flex-col justify-between flex-1 h-[200px]'>
					<Image
						src={shieldImage}
						height={48}
						width={48}
						alt=''
					/>
					<div>
						<h4 className='font-semibold'>100% secure payments</h4>
						<p className='leading-6 text-grayscale-g-3'>
							Internationally recognized encrypted payment process
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

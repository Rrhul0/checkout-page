import Image from 'next/image'
import circleWavyCheck from '@/public/CircleWavyCheck.svg'
import chatImage from '@/public/chat.svg'
import calanderImage from '@/public/calander.svg'
import shieldImage from '@/public/shieldBlue.svg'

export default function TicketePromise() {
	return (
		<div className='flex flex-col gap-6 md:gap-8 px-6 sm:px-16 md:px-0 pb-[50px] md:pb-0'>
			<h3 className='text-lg md:text-2xl font-semibold'>
				The Tickete promise
			</h3>
			<div className='flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-6'>
				<div className='flex flex-col md:flex-row gap-6 flex-grow'>
					<div className='md:border flex-row rounded-xl md:px-5 md:py-4 flex md:flex-col items-start gap-4 md:justify-between flex-1 h-[200px]'>
						<Image
							src={circleWavyCheck}
							className='w-6 aspect-square md:w-12'
							alt=''
						/>
						<div>
							<h4 className='font-semibold'>Official tickets</h4>
							<p className='leading-6 text-grayscale-g-3'>
								Authorised reseller to top attraction
							</p>
						</div>
					</div>
					<div className='md:border flex-row rounded-xl md:px-5 md:py-4 flex md:flex-col items-start gap-4 md:justify-between flex-1 h-[200px]'>
						<Image
							src={chatImage}
							className='w-6 aspect-square md:w-12'
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
				</div>
				<div className='flex flex-col md:flex-row gap-6 flex-grow'>
					<div className='md:border flex-row rounded-xl md:px-5 md:py-4 flex md:flex-col items-start gap-4 md:justify-between flex-1 h-[200px]'>
						<Image
							src={calanderImage}
							className='w-6 aspect-square md:w-12'
							alt=''
						/>
						<div>
							<h4 className='font-semibold'>Flexible bookings</h4>
							<p className='leading-6 text-grayscale-g-3'>
								Book stress-free with easy cancellation
							</p>
						</div>
					</div>
					<div className='md:border flex-row rounded-xl md:px-5 md:py-4 flex md:flex-col items-start gap-4 md:justify-between flex-1 h-[200px]'>
						<Image
							src={shieldImage}
							className='w-6 aspect-square md:w-12'
							alt=''
						/>
						<div>
							<h4 className='font-semibold'>
								100% secure payments
							</h4>
							<p className='leading-6 text-grayscale-g-3'>
								Internationally recognized encrypted payment
								process
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

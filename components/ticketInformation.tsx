import Image from 'next/image'
import ticketItemImage from '@/public/ticketItemImage.png'
import ticketImage from '@/public/ticket.svg'
import calanderImage from '@/public/calander.svg'
import clockImage from '@/public/clock.svg'
import tagImage from '@/public/tag.svg'

export default function TicketInformation() {
	return (
		<div className='w-80'>
			<div>
				<Image
					src={ticketItemImage.src}
					width={ticketItemImage.width}
					height={ticketItemImage.height}
					alt='item image'
				/>
				<p className='text-lg tracking-tighter font-semibold mt-3'>
					Amsterdam opeg boat canal cruise - Live Ggide - from Anne
					Frgnk House
				</p>
				<div className='py-6 flex flex-col gap-3'>
					<div className='flex gap-4'>
						<Image
							src={ticketImage}
							width={24}
							height={24}
							alt='ticket'
						/>
						<span className='font-semibold leading-5'>
							&lt;variant name&gt;
						</span>
					</div>
					<div className='flex gap-4'>
						<Image
							src={calanderImage}
							width={24}
							height={24}
							alt='calander'
						/>
						<span className='font-semibold leading-5'>
							&lt;date&gt;
						</span>
					</div>
					<div className='flex gap-4'>
						<Image
							src={clockImage}
							width={24}
							height={24}
							alt='clock'
						/>
						<span className='font-semibold leading-5'>
							&lt;time&gt;
						</span>
					</div>
				</div>
				<div className='border-b' />
			</div>
			<div className='pt-12'>
				<p className='text-lg tracking-tight font-semibold'>
					Tickets overview
				</p>
				<div className='flex flex-col gap-4 pt-8 pb-3'>
					<div className='flex'>
						<span className='flex-1'>&lt;pax type&gt;</span>
						<span>&lt;price&gt;</span>
					</div>
					<div className='flex'>
						<span className='flex-1'>&lt;pax type&gt;</span>
						<span>&lt;price&gt;</span>
					</div>
					<div className='flex'>
						<span className='flex-1'>&lt;pax type&gt;</span>
						<span>&lt;price&gt;</span>
					</div>
					<div className='flex text-green-sacramento/9'>
						<span className='flex-1'>&lt;discount applied&gt;</span>
						<span>&lt;-price&gt;</span>
					</div>
				</div>
				<div className='flex gap-3 py-6 border-y text-green-sacramento/9 font-semibold text-sm leading-4 underline'>
					<Image
						src={tagImage}
						height={20}
						width={20}
						alt='tag'
					/>
					<button>Have a promo code?</button>
				</div>
				<div className='py-6'>
					<div className='flex leading-5 font-semibold'>
						<span className='flex-1 '>Total</span>
						<span>&lt;price&gt;</span>
					</div>
					<p className='text-xs text-grayscale-g-3 underline underline-offset-2'>
						You will pay in &lt;currency&gt;
					</p>
				</div>
				<div className='px-5 py-4 bg-grayscale-g-8 rounded-xl text-sm leading-4'>
					<p className='font-semibold'>Free cancellation</p>
					<p className='leading-[22px] text-grayscale-g-3'>
						Cancel before &lt;date&gt; for a full refund
					</p>
				</div>
			</div>
		</div>
	)
}

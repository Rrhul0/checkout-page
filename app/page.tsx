'use client'
import TextInput from '@/components/textInput'
import Image from 'next/image'
import { useState } from 'react'
import cardImage from '@/public/card.svg'
import klarnaImage from '@/public/klarna.svg'

export default function Home() {
	const [paymentMethod, setPaymentMethod] = useState<'card' | 'klarna'>(
		'card'
	)

	return (
		<form className='flex flex-col gap-16'>
			<h2 className='text-5xl font-semibold'>Confirm and pay</h2>
			<div>
				<div className='pb-8'>
					<p className='text-2xl font-semibold'>Enter your details</p>
					<p>
						We&apos;ll be sending your tickets to the details below.
						Booking for a friend? Add their details.
					</p>
				</div>
				<div className='flex flex-col gap-7'>
					<div className='flex gap-6'>
						<TextInput lebel='Full Name' />
						<TextInput lebel='Phone number' />
					</div>
					<div className='flex gap-6'>
						<TextInput lebel='Email' />
						<TextInput lebel='Username' />
					</div>
				</div>
			</div>
			<div>
				<div className='pb-8'>
					<p className='text-2xl font-semibold'>
						Additional information
					</p>
					<p>
						We need a few more details to complete your reservation.
					</p>
				</div>
				<div className='flex gap-6'>
					<TextInput lebel='Email' />
					<TextInput lebel='Username' />
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<div className='pb-2'>
					<p className='text-2xl font-semibold'>
						Select your mode of payment
					</p>
					<p>Payments with Tickete are secure and encrypted.</p>
				</div>
				<div className='flex justify-between'>
					<label
						htmlFor='card'
						className='w-full flex gap-5'
					>
						<Image
							src={cardImage}
							width={24}
							height={24}
							alt='card image'
						/>
						<span>Credit & debit card</span>
					</label>
					<input
						id='card'
						type='radio'
						value='card'
						name='payment'
						checked={paymentMethod === 'card'}
						onClick={() => setPaymentMethod('card')}
					/>
				</div>
				{paymentMethod === 'card' && (
					<div className='flex flex-col gap-7'>
						<div className='flex gap-6'>
							<TextInput lebel='Name on Card' />
							<TextInput lebel='Card Number' />
						</div>
						<div className='flex gap-6'>
							<TextInput lebel='Expiry Date' />
							<TextInput lebel='CVV/CVC' />
						</div>
					</div>
				)}
				<div className='border-t' />
				<div className='flex justify-between'>
					<label
						htmlFor='klarna'
						className='w-full flex gap-5'
					>
						<Image
							src={klarnaImage}
							width={24}
							height={24}
							alt='klarna image'
						/>
						<span>Klarna</span>
					</label>
					<input
						id='klarna'
						type='radio'
						value='klarna'
						name='payment'
						checked={paymentMethod === 'klarna'}
						onClick={() => setPaymentMethod('klarna')}
					/>
				</div>
				<div className='border-t' />
			</div>
		</form>
	)
}

'use client'
import { useState } from 'react'
import Image from 'next/image'
import TextInput from './textInput'
import cardImage from '@/public/card.svg'
import klarnaImage from '@/public/klarna.svg'
import shieldImage from '@/public/shield.svg'

export default function PaymentForm() {
	const [paymentMethod, setPaymentMethod] = useState<'card' | 'klarna'>(
		'card'
	)

	return (
		<form className='flex flex-col gap-5 md:gap-12 flex-1 px-6 sm:px-16 md:px-0'>
			<h2 className='text-5xl font-semibold hidden md:block'>
				Confirm and pay
			</h2>
			<div>
				<div className='pb-6 md:pb-8 flex flex-col gap-2'>
					<p className='text-2xl font-semibold'>Enter your details</p>
					<p>
						We&apos;ll be sending your tickets to the details below.
						Booking for a friend? Add their details.
					</p>
				</div>
				<div className='flex flex-col gap-6'>
					<div className='flex flex-col md:flex-row gap-6'>
						<TextInput lebel='Full Name' />
						<TextInput lebel='Phone number' />
					</div>
					<div className='flex flex-col md:flex-row gap-6'>
						<TextInput lebel='Email' />
						<TextInput lebel='Username' />
					</div>
				</div>
			</div>
			<div>
				<div className='pb-8 flex flex-col gap-2'>
					<p className='text-2xl font-semibold'>
						Additional information
					</p>
					<p>
						We need a few more details to complete your reservation.
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-6'>
					<TextInput lebel='Email' />
					<TextInput lebel='Username' />
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<div className='pb-2 flex flex-col gap-2'>
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
						<span className='font-semibold'>
							Credit & debit card
						</span>
					</label>
					<input
						id='card'
						type='radio'
						value='card'
						name='payment'
						checked={paymentMethod === 'card'}
						onChange={() => setPaymentMethod('card')}
					/>
				</div>
				{paymentMethod === 'card' && (
					<div className='flex flex-col gap-7'>
						<div className='flex flex-col md:flex-row gap-6'>
							<TextInput lebel='Name on Card' />
							<TextInput lebel='Card Number' />
						</div>
						<div className='flex flex-col md:flex-row gap-6'>
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
						<span className='font-semibold'>Klarna</span>
					</label>
					<input
						id='klarna'
						type='radio'
						value='klarna'
						name='payment'
						checked={paymentMethod === 'klarna'}
						onChange={() => setPaymentMethod('klarna')}
					/>
				</div>
				<div className='border-t' />
			</div>
			<div>
				<p className='text-xl font-semibold'>Total: &lt;price&gt;</p>
				<p className='text-xs text-grayscale-g-3 underline underline-offset-2'>
					You will pay in &lt;currency&gt;
				</p>
			</div>
			<div>
				<div className='rounded-lg bg-grayscale-g-8 h-12 flex items-center text-xs font-semibold px-4 gap-3'>
					<input
						id='subscribe-email'
						type='checkbox'
					/>
					<label htmlFor='subscribe-email'>
						Receive travel tips, suggestions and offers in
						&lt;city&gt; by email
					</label>
				</div>
				<p className='text-xs leading-5 text-grayscale-g-3 pt-[22px]'>
					With payment, you agree to the general{' '}
					<a className='text-blue-crayola/9'>terms and conditions</a>{' '}
					of Tickete & the{' '}
					<a className='text-blue-crayola/9'>activity provider</a>.
				</p>
				<button
					type='submit'
					className='text-grayscale-g-9 bg-black-fogra rounded-xl px-5 h-12 flex gap-2 items-center mt-3 w-full justify-center sm:w-auto'
				>
					<span>Confirm and pay</span>
					<Image
						src={shieldImage}
						alt='secured'
						width={20}
						height={20}
					/>
				</button>
			</div>
		</form>
	)
}

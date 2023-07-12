'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import minus from '@/public/minus.svg'
import plus from '@/public/plus.svg'

type FaqType = { question: string; answer: string }

const FAQS: FaqType[] = [
	{
		question: 'Are my tickets transferable?',
		answer: 'No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.'
	},
	{
		question: 'How long will it take to receive my ticket?',
		answer: 'The tickets will hit your inbox as soon as you complete making the payment.'
	},
	{
		question: 'Is my payment secure?',
		answer: 'We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!'
	},
	{
		question: 'What type of payment options do you offer?',
		answer: 'We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments.'
	},
	{
		question: 'When will I be charged for my booking?',
		answer: 'Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost.'
	},
	{
		question: 'Why am I being charged in USD?',
		answer: 'All payments on Tickete are charged in USD. Your accounted will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we’re working on accepting payments in currencies across the world.'
	},
	{
		question: 'Will I get a complete refund if I cancel this ticket?',
		answer: 'The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund.'
	},
	{
		question:
			'How long does it take for a refund to reflect in my account?',
		answer: 'Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account.'
	}
]

export default function Faqs() {
	return (
		<div className='flex-1'>
			<h3 className='text-lg md:text-2xl tracking-[-0.36px] md:tracking-[-0.48px] font-semibold'>
				Frequently asked questions
			</h3>
			<ol className='flex-1 md:pt-2'>
				{FAQS.map((faq, index) => (
					<div
						key={index}
						className='flex flex-col gap-6 after:border-b after:border-grayscale-g-6 md:last:after:border-none'
					>
						<Faq faq={faq} />
					</div>
				))}
			</ol>
		</div>
	)
}

function Faq({ faq }: { faq: FaqType }) {
	const [isOpen, setOpen] = useState(false)
	return (
		<li className='flex flex-col gap-3 pt-6'>
			<button
				className='flex w-full gap-4'
				onClick={() => setOpen(o => !o)}
			>
				<span className='flex-1 text-left text-sm md:text-lg font-semibold'>
					{faq.question}
				</span>
				<Image
					src={isOpen ? minus : plus}
					alt=''
					width={20}
					height={20}
				/>
			</button>
			<p
				className={`${
					isOpen ? 'block' : 'hidden'
				} text-xs md:text-base text-grayscale-g-3`}
			>
				{faq.answer}
			</p>
		</li>
	)
}

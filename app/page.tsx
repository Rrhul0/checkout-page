import Faqs from '@/components/faqs'
import Help from '@/components/help'
import PaymentForm from '@/components/paymentForm'
import TicketInformation from '@/components/ticketInformation'
import TicketePromise from '@/components/ticketePromise'

export default function Home() {
	return (
		<div className='flex flex-col gap-10 md:gap-16'>
			<div>
				<div className='flex flex-col-reverse  md:flex-row  gap-6'>
					<PaymentForm />
					<div className='border-l' />
					<TicketInformation />
				</div>
				<div className='border-b mt-6' />
			</div>
			<div>
				<div className='flex flex-col md:flex-row px-6 sm:px-16 gap-10 md:gap-32 items-center md:items-start after:border-b after:border-grayscale-g-6 after:w-full'>
					<Faqs />
					<Help />
				</div>
			</div>
			{/*
			<div>
				<TicketePromise />
			</div> */}
		</div>
	)
}

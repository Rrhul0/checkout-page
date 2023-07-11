import Faqs from '@/components/faqs'
import PaymentForm from '@/components/paymentForm'
import TicketInformation from '@/components/ticketInformation'

export default function Home() {
	return (
		<div>
			<div className='flex gap-6'>
				<PaymentForm />
				<div className='border-l' />
				<TicketInformation />
			</div>
			<div className='border-b mt-6' />
			<div className='flex gap-32'>
				<Faqs />
				<div className='w-[360px]'></div>
			</div>
		</div>
	)
}

import Faqs from '@/components/faqs'
import Help from '@/components/help'
import PaymentForm from '@/components/paymentForm'
import TicketInformation from '@/components/ticketInformation'
import TicketePromise from '@/components/ticketePromise'

export default function Home() {
	return (
		<div className='flex flex-col gap-16'>
			<div>
				<div className='flex gap-6'>
					<PaymentForm />
					<div className='border-l' />
					<TicketInformation />
				</div>
				<div className='border-b mt-6' />
			</div>
			<div>
				<div className='flex gap-32 items-start'>
					<Faqs />
					<Help />
				</div>
				<div className='border-b mt-6' />
			</div>
		</div>
	)
}

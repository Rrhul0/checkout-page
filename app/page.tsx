import PaymentForm from '@/components/paymentForm'
import TicketInformation from '@/components/ticketInformation'

export default function Home() {
	return (
		<div className='flex gap-6'>
			<PaymentForm />
			<div className='border-l' />
			<TicketInformation />
		</div>
	)
}

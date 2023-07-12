import Faqs from '@/components/faqs'
import Help from '@/components/help'
import PaymentForm from '@/components/paymentForm'
import TicketInformation from '@/components/ticketInformation'
import TicketePromise from '@/components/ticketePromise'

export default function Home() {
	return (
		<div className='flex flex-col gap-10 md:gap-16 w-full'>
			<div className='after:border-b after:border-grayscale-g-6 flex flex-col after:pt-6 '>
				<div className='flex flex-col-reverse  md:flex-row  gap-6 '>
					<PaymentForm />
					<div className='border-l border-grayscale-g-6' />
					<TicketInformation />
				</div>
			</div>
			<div className='after:border-b after:border-grayscale-g-6 flex flex-col px-6 sm:px-16 md:px-0 after:pt-6 after:md:pt-0'>
				<div className='flex flex-col md:flex-row  gap-10 md:gap-32 items-center md:items-start'>
					<Faqs />
					<Help />
				</div>
			</div>

			<div>
				<TicketePromise />
			</div>
		</div>
	)
}

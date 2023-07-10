type Props = {
	lebel: string
}

export default function TextInput({ lebel }: Props) {
	return (
		<div className='relative h-12 w-full min-w-[200px]'>
			<input
				className='peer h-full w-full rounded-[7px] border border-t-transparent border-grayscale-g-6 bg-transparent px-4 py-6 font-sans text-sm font-normal text-grayscale-g-2 outline-none outline-0 transition-all placeholder-shown:border placeholder-shown:border-grayscale-g-6 focus:border focus:border-t-transparent focus:outline-0'
				placeholder=' '
			/>
			<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-grayscale-g-3 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-grayscale-g-6 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-grayscale-g-6 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.2] peer-placeholder-shown:text-grayscale-g-3 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-grayscale-g-3 peer-focus:before:border-t peer-focus:before:border-l peer-focus:before:border-grayscale-g-6 peer-focus:after:border-t peer-focus:after:border-r peer-focus:after:border-grayscale-g-6 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
				{lebel}
			</label>
		</div>
	)
}

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return(
<footer>
		<section id='contact' className='flex flex-row justify-center'>
			<h4 className='font-body pt-2'> Contact Me: </h4>
			<Link href='mailto:lvjones214@aol.com' className='flex p-3 '> 
				<Image src={'/AOL.jpg'} alt='Email' width='40' height='40'/>
			</Link>
			<Link href='https://www.linkedin.com/in/laurenmonowar-jones/'className='flex p-2'> 
				<Image src={'/linkedin.png'} alt='"linkedin' width='50' height='50' />
			</Link>
			<Link href='https://www.github.com/lvjones214/'className='flex p-2'> 
				<Image src={'/github.png'} alt='github' width='50' height='50'/>
			</Link>
		</section>
		<small className='flex justify-center'>©2023</small>
	</footer>
	)
	
};

export default Footer;
import Link from 'next/link';

function NavBar(props: navBarProps){
	return(
		<nav className='flex flex-col items-center'>
			<ul className='flex font-body justify-between w-1/2 px-12'>
				<li className={`${props.currentPage === 'HOME' ? 'active-page' : null}`}>
					<Link href='/' className='flex'>Home</Link>
				</li>
				<li className={`${props.currentPage === 'RESUME' ? 'active-page' : null}`}>
					<Link href='/Resume' className='flex'>Resume</Link>
				</li>
				<li className={`${props.currentPage === 'PROJECTS' ? 'active-page' : null}`}>
					<Link href='/Projects' className='flex'>Projects</Link>
				</li>
				<li className={`${props.currentPage === 'CONTACT' ? 'active-page' : null}`}>
					<Link href='/Contact' className='flex'>Contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar;

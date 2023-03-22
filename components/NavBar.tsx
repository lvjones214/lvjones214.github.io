import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

function NavBar(props: navBarProps){
	const [toggle, setToggle] = useState(true);
	const handleClick = () => {
		setToggle((prev) => !prev);
	};

 	return(
		<nav className='flex flex-col items-center'>
			<ul className='min-[770px]:flex min-[770px]:flex-1 sm:justify-between max-w-2xl font-body hidden'>
				<li className={`${props.currentPage === 'HOME' ? 'active-page' : null}`}>
					<Link href='/' className='flex w-20 pr-6 justify-between'>Home</Link>
				</li>
				<li className={`${props.currentPage === 'RESUME' ? 'active-page' : null}`}>
					<Link href='/Resume' className='flex w-20 pr-6 justify-between'>Resume</Link>
				</li>
				<li className={`${props.currentPage === 'PROJECTS' ? 'active-page' : null}`}>
					<Link href='/Projects' className='flex w-20 pr-6 justify-between'>Projects</Link>
				</li>
				<li className={`${props.currentPage === 'ABOUT' ? 'active-page' : null}`}>
					<Link href='/About' className='flex w-20 pr-6 justify-between'>About</Link>
				</li>
			</ul>
			<div className='min-[770px]:hidden h-16 flex flex-1 justify-end items-center'>
        {toggle ? (
          <RxHamburgerMenu
            className='w-8 h-8 min-[550px]:w-12 min-[550px]:h-12 mr-8'
            onClick={handleClick}
          />
        ) : (
          <AiOutlineClose
            className='w-8 h-8 min-[550px]:w-12 min-[550px]:h-12 mr-8'
            onClick={handleClick}
          />
        )}
        <div
          className={`${
            toggle ? 'hidden' : 'flex'
          }  w-56 text-lg justify-center absolute top-20 right-0 mx-4 my-2 min-[440px]:my-8 min-[440px]:mx-8 min-w-[140px] text-center rounded-xl sidebar`}
        >
          <ul className='flex flex-col text-white w-full p-6'>
						<li><Link href='/' className='p-2 w-full block'> Home</Link></li>
						<li><Link href='/Resume' className='p-2 w-full block'> Resume</Link></li>
						<li><Link href='/Projects' className='p-2 w-full block'> Projects</Link></li>
						<li><Link href='/About' className='p-2 w-full block'> About</Link></li>
          </ul>
        </div>
      </div>


		</nav>
	)
}

type navBarProps = {
	currentPage: string,
};

const defaultNavBarProps = { currentPage: "HOME" }
NavBar.defaultProps = defaultNavBarProps;

export default NavBar;

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { projectDescriptions } from '@/constants/projectDescriptions';

function Project() {
	
	function classNames(...classes: any) {
		return classes.filter(Boolean).join(' ')
	}

  const router=useRouter()
  const {Project}=router.query

	let data=projectDescriptions[0];

  if(Project && typeof(Project) == 'string'){
    let id=parseInt(Project);

    data=projectDescriptions[id];
  }

 return(
	<>
		<div>
      <Header/>
			<NavBar currentPage='PORTFOLIO'/>
		</div>
		<div>
			<h1 className='font-headline py-6 text-5xl text-center'>{data.name}</h1>
      <h2 className='font-headline text-center text-3xl'>{data.date}</h2>
      <h3 className='font-headline text-center text-xl'>{data.team}</h3>
      <div className=''>
        <ul className='flex flex-col'>
          <li className='flex flex-row text-lg font-body pt-6'>
          <img src={data.image1} className='w-1/2'/>
          <p className='mt-12 text-left ml-8'>{data.description}</p>
          </li>
          <li className='flex flex-row text-lg font-body pt-6'>
          <img src={data.image2} className='w-1/2'/>
          <p className='mt-12 text-left ml-8'>{data.description2}</p>
          </li>
					<li className='flex flex-row text-lg font-body pt-6'>
          <img src={data.image3} className='w-1/2'/>
          <p className='mt-12 text-left ml-8'>{data.description3}</p>
          </li>
					
					
					<Link className='font-body text-3xl pt-8 underline' href={data.link}>{data.link}</Link>
						
        </ul>
      </div>
			
    </div>
    <Footer/>
	</>
 )
}

export default Project;
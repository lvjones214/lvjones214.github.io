import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { projectDescriptions } from '@/constants/projectDescriptions';

function Project() {

  const router=useRouter()
  const {Project}=router.query


 return(
	<>
	</>
 )
}

export default Project;

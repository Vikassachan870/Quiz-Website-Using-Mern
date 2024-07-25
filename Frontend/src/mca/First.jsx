import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import Discreate from '../image/discreate.jpg'
import Coa from '../image/coa.jpeg'
import Foc from '../image/foc.jpg'
import C from '../image/c_lan.webp'
import Pom from '../image/pom.jpg'
import DiscPdf from '../pdf/Rosen.pdf'
import CoaPdf from '../pdf/COA_Full.pdf'
import FocPdf from '../pdf/Foc.pdf'
import ClanPdf from '../pdf/c_language.pdf'
import PomPdf from '../pdf/Pom.pdf'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const First = () => {

    const navigate = useNavigate();
    useEffect(()=>{if (!localStorage.getItem("loggedin")){{navigate('/')};}})

    useEffect(() => {
        document.title = 'First Semester';
      }, [])

    const [disc, setDisc] = useState({
        title:'Discreate Mathematics',
        desc: 'Discreate Mathematics and its Appications',
        descSub1:'(Kenneth H. Rosen)',
        edition:'7th Edition',
    })
    const [coa, setCoa] = useState({
        title:'C.O.A.',
        desc: 'Computer Organization and Architecture',
        descSub1:'(Dr. Prakash Mahanwar)',
        edition:'2nd Edition',
    })
    const [foc, setFoc] = useState({
        title:'F.O.C',
        desc: 'Fundamental of computers',
        descSub1:'(E Balagurusamy)',
        edition:'1st Edition',
    })
    const [clan, setClan] = useState({
        title:'C language',
        desc: 'Basics of C programming language',
        descSub1:'(Schildt H)',
        edition:'4th Edition',
    })
    const [pom, setPom] = useState({
        title:'Principle Of Management',
        desc: 'Principle of management',
        descSub1:'(P.C. tripathi & P.N. Reddy)',
        edition:'5th Edition',
    })
    return (
        <>
        <NavBar />
            <div className='flex space-x-24 ml-24 mt-10'>
                <div className='w-[350px]'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Discreate} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{disc.title}</p>
                        <p>{disc.desc}</p>
                        <p className='font-bold'>{disc.descSub1}</p>
                        <p className='font-semibold'>{disc.edition}</p>
                        <div className='mt-4'>
                            <a href={DiscPdf} download="Discreate Mathematics" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
                <div className='w-[350px]'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Coa} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{coa.title}</p>
                        <p>{disc.desc}</p>
                        <p className='font-bold'>{coa.descSub1}</p>
                        <p className='font-semibold'>{coa.edition}</p>
                        <div className='mt-4'>
                            <a href={CoaPdf} download="Computer of application" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
                <div className='w-[350px]'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Foc} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{foc.title}</p>
                        <p>{foc.desc}</p>
                        <p className='font-bold'>{foc.descSub1}</p>
                        <p className='font-semibold'>{foc.edition}</p>
                        <div className='mt-4'>
                            <a href={FocPdf} download="Fundamental of computer" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex space-x-24 ml-24 my-10'>
                <div className='w-[350px]'>
                    <img className='w-full h-[300px] rounded-t-lg' src={C} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{clan.title}</p>
                        <p>{clan.desc}</p>
                        <p className='font-bold'>{clan.descSub1}</p>
                        <p className='font-semibold'>{clan.edition}</p>
                        <div className='mt-4'>
                            <a href={ClanPdf} download="C language" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
                <div className='w-[350px]'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Pom} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{pom.title}</p>
                        <p>{pom.desc}</p>
                        <p className='font-bold'>{pom.descSub1}</p>
                        <p className='font-semibold'>{pom.edition}</p>
                        <div className='mt-4'>
                            <a href={PomPdf} download="Principal of management" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default First

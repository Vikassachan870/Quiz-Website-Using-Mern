import React, { useEffect, useState } from 'react'
import Ai from '../image/ai.jpg'
import Se from '../image/se.jpg'
import Spm from '../image/spm.jpg'
import Web from '../image/web.jpg'
import Cn from '../image/cn.jpg'
import AiPdf from '../pdf/ai.pdf'
import SePdf from '../pdf/se.pdf'
import SpmPdf from '../pdf/spm.pdf'
import WebPdf from '../pdf/web_development.pdf'
import CnPdf from '../pdf/cn.pdf'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Third = () => {
    const navigate = useNavigate();
    useEffect(()=>{if (!localStorage.getItem("loggedin")){{navigate('/')};}})
    useEffect(() => {
        document.title = 'Third Semester';
      }, [])
    const [ai, setAi] = useState({
        title: 'A.I.',
        desc: 'Artificial Intelligence',
        descSub1: '(Rich E. & Knight K.)',
        edition: '3rd Edition',
    })
    const [se, setSe] = useState({
        title: 'Software Engineering',
        desc: 'Software Engineering',
        descSub1: '(R S Pressman)',
        edition: '7th Edition',
    })
    const [spm, setSpm] = useState({
        title: 'Software Project Management',
        desc: 'Software project management',
        descSub1: '(Bob Hughes and Mike Cotterell)',
        edition: '5th Edition',
    })
    const [web, setWeb] = useState({
        title: 'Web Development',
        desc: 'Web technology & Design',
        descSub1: '(C Xavier)',
        edition: '1st Edition',
    })
    const [cn, setCn] = useState({
        title: 'Computer Network',
        desc: 'Data communications & Networking',
        descSub1: '(Behrouz A. Forouzan)',
        edition: '4th Edition',
    })

    return (
        <>
        <NavBar />
            <div className='flex space-x-24 ml-24 mt-10'>
                <div className='w-[350px] border border-gray-400 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Ai} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{ai.title}</p>
                        <p>{ai.desc}</p>
                        <p className='font-bold'>{ai.descSub1}</p>
                        <p className='font-semibold'>{ai.edition}</p>
                        <div className='mt-4'>
                            <a href={AiPdf} download="Artificial Intelligence" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
                <div className='w-[350px] border border-gray-400 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Se} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{se.title}</p>
                        <p>{se.desc}</p>
                        <p className='font-bold'>{se.descSub1}</p>
                        <p className='font-semibold'>{se.edition}</p>
                        <div className='mt-4'>
                            <a href={SePdf} download="Software Engineering" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
                <div className='w-[350px] border border-gray-400 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Spm} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{spm.title}</p>
                        <p>{spm.desc}</p>
                        <p className='font-bold'>{spm.descSub1}</p>
                        <p className='font-semibold'>{spm.edition}</p>
                        <div className='mt-4'>
                            <a href={SpmPdf} download="Software Project Management" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex space-x-24 ml-24 my-10'>
                <div className='w-[350px] border border-gray-400 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Web} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{web.title}</p>
                        <p>{web.desc}</p>
                        <p className='font-bold'>{web.descSub1}</p>
                        <p className='font-semibold'>{web.edition}</p>
                        <div className='mt-4'>
                            <a href={WebPdf} download="Web Development" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
                <div className='w-[350px] border border-gray-400 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Cn} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{cn.title}</p>
                        <p>{cn.desc}</p>
                        <p className='font-bold'>{cn.descSub1}</p>
                        <p className='font-semibold'>{cn.edition}</p>
                        <div className='mt-4'>
                            <a href={CnPdf} download="Computer Networks" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Third

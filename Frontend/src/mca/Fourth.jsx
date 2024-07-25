import React, { useEffect, useState } from 'react'
import Dds from '../image/dds.jpg'
import Mc from '../image/mc.png'
import Sqa from '../image/sqa.png'
import DdsPdf from '../pdf/dds.pdf'
import McPdf from '../pdf/mobile_computing.pdf'
import SqaPdf from '../pdf/sqa.pdf'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Fourth = () => {

    const navigate = useNavigate();
    useEffect(()=>{if (!localStorage.getItem("loggedin")){{navigate('/')};}})

    useEffect(() => {
        document.title = 'Fourth Semetser';
      }, [])

    const [dds, setDds] = useState({
        title: 'Distributed Database Systems',
        desc: 'Distributed Database Systems',
        descSub1: '(Silberschatz, Korth & Sudarshan)',
        edition: '4th Edition',
    })
    const [mc, setMc] = useState({
        title: 'Mobile Computing ',
        desc: 'Mobile Computing ',
        descSub1: '(Jochen Schiller)',
        edition: '2nd Edition',
    })
    const [sqa, setSqa] = useState({
        title: 'S.Q.A. ',
        desc: 'Software Quality Assurance',
        descSub1: '(Daniel Galin)',
        edition: '4th Edition',
    })
    return (
        <>
        <NavBar />
            <div className='flex space-x-24 ml-24 mt-10'>
                <div className='w-[350px] border border-gray-400 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Dds} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{dds.title}</p>
                        <p>{dds.desc}</p>
                        <p className='font-bold'>{dds.descSub1}</p>
                        <p className='font-semibold'>{dds.edition}</p>
                        <div className='mt-4'>
                            <a href={DdsPdf} download="Distributed Database System" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>

                <div className='w-[350px] border border-gray-400 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Mc} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{mc.title}</p>
                        <p>{mc.desc}</p>
                        <p className='font-bold'>{mc.descSub1}</p>
                        <p className='font-semibold'>{mc.edition}</p>
                        <div className='mt-4'>
                            <a href={McPdf} download="Mobile Computing" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>

                <div className='w-[350px] border border-gray-400 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Sqa} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{sqa.title}</p>
                        <p>{sqa.desc}</p>
                        <p className='font-bold'>{sqa.descSub1}</p>
                        <p className='font-semibold'>{sqa.edition}</p>
                        <div className='mt-4'>
                            <a href={SqaPdf} download="Software Quality Assurance" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fourth

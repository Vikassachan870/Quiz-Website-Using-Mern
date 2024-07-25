import React, { useEffect, useState } from 'react'
import Auto from '../image/autometa.jpg'
import Java from '../image/Oops.jpg'
import Dsa from '../image/dsa.jpeg'
import Dbms from '../image/dbms.jpg'
import Os from '../image/os.jpg'
import AutoPdf from '../pdf/Automata.pdf'
import JavaPdf from '../pdf/Java.pdf'
import DsaPdf from '../pdf/Data_structure.pdf'
import DbmsPdf from '../pdf/dbms.pdf'
import OsPdf from '../pdf/os.pdf'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Second = () => {

    const navigate = useNavigate();
    useEffect(()=>{if (!localStorage.getItem("loggedin")){{navigate('/')};}})

    useEffect(() => {
        document.title = 'Second Semester';
      }, [])

    const [auto, setAuto] = useState({
        title: 'Automata',
        desc: 'Introduction to the theory of computation',
        descSub1: '(Michael Sipser)',
        edition: '3rd Edition',
    })
    const [java, setJava] = useState({
        title: 'Java',
        desc: 'Object-Oriented programming using java',
        descSub1: '(Simon Kendal)',
        edition: '1st Edition',
    })
    const [dsa, setDsa] = useState({
        title: 'DSA',
        desc: 'Data structure and algorithm using C',
        descSub1: '(Cormen T. H., Leiserson C. E., Rivest R. L.)',
        edition: '3rd Edition',
    })
    const [dbms, setDbms] = useState({
        title: 'DBMS',
        desc: 'Databse Management System',
        descSub1: '(Korth, Silbertz & Sudarshan)',
        edition: '7th Edition',
    })
    const [os, setOs] = useState({
        title: 'O.S.',
        desc: 'Operating system',
        descSub1: '(Silberschatz, Galvin and Gagne)',
        edition: '6th Edition',
    })
    return (
        <>
        <NavBar />
            <div className='flex space-x-24 ml-24 mt-10'>
                <div className='w-[350px]'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Auto} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{auto.title}</p>
                        <p>{auto.desc}</p>
                        <p className='font-bold'>{auto.descSub1}</p>
                        <p className='font-semibold'>{auto.edition}</p>
                        <div className='mt-4'>
                            <a href={AutoPdf} download="Automata" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
                <div className='w-[350px]'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Java} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{java.title}</p>
                        <p>{java.desc}</p>
                        <p className='font-bold'>{java.descSub1}</p>
                        <p className='font-semibold'>{java.edition}</p>
                        <div className='mt-4'>
                            <a href={JavaPdf} download="Java" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
                <div className='w-[350px]'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Dsa} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{dsa.title}</p>
                        <p>{dsa.desc}</p>
                        <p className='font-bold'>{dsa.descSub1}</p>
                        <p className='font-semibold'>{dsa.edition}</p>
                        <div className='mt-4'>
                            <a href={DsaPdf} download="Data Structure" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex space-x-24 ml-24 my-16'>
            <div className='w-[350px] border border-gray-300 rounded-lg'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Dbms} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{dbms.title}</p>
                        <p>{dbms.desc}</p>
                        <p className='font-bold'>{dbms.descSub1}</p>
                        <p className='font-semibold'>{dbms.edition}</p>
                        <div className='mt-4'>
                            <a href={DbmsPdf} download="Database Management System" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
            <div className='w-[350px] border'>
                    <img className='w-full h-[300px] rounded-t-lg' src={Os} alt="" />
                    <div className='h-48 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{os.title}</p>
                        <p>{os.desc}</p>
                        <p className='font-bold'>{os.descSub1}</p>
                        <p className='font-semibold'>{os.edition}</p>
                        <div className='mt-4'>
                            <a href={OsPdf} download="Operating System" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second

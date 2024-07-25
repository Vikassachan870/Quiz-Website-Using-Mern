import React, { useEffect, useState } from 'react'
import MCABooks from '../image/MCA_Books.png'
import { NavLink, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';

const Semesters = () => {
    const navigate = useNavigate();
    useEffect(()=>{if (!localStorage.getItem("loggedin")){{navigate('/')};}})

    useEffect(() => {
        document.title = 'Semesters';
      }, [])

    const [books, setBooks] = useState(
        {
            title1: 'First semester',
            title2: 'Second semester',
            title3: 'Third semester',
            title4: 'Fourth semester',
            desc1: 'Click here to download first semester books pdf',
            desc2: 'Click here to download second semester books pdf',
            desc3: 'Click here to download third semester books pdf',
            desc4: 'Click here to download fourth semester books pdf',
            button1: 'Click here',
            button2: 'Click here',
            button3: 'Click here',
            button4: 'Click here',
        }
    )
    return (
        <>
        <NavBar />
            <div className='flex space-x-7 ml-20 mt-14'>
                <div className='w-[300px]'>
                    <img className='w-full h-[250px] rounded-t-lg' src={MCABooks} alt="" />
                    <div className='h-40 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{books.title1}</p>
                        <p>{books.desc1}</p>
                        <div className='mt-4'>
                            <NavLink to="/first" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>{books.button1}</NavLink>
                        </div>
                    </div>
                </div>
                <div className='w-[300px]'>
                    <img className='w-full h-[250px] rounded-t-lg' src={MCABooks} alt="" />
                    <div className='h-40 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{books.title2}</p>
                        <p>{books.desc2}</p>
                        <div className='mt-4'>
                            <NavLink to="/second" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>{books.button2}</NavLink>
                        </div>
                    </div>
                </div>
                <div className='w-[300px]'>
                    <img className='w-full h-[250px] rounded-t-lg' src={MCABooks} alt="" />
                    <div className='h-40 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{books.title3}</p>
                        <p>{books.desc3}</p>
                        <div className='mt-4'>
                            <NavLink to="/third" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>{books.button3}</NavLink>
                        </div>
                    </div>
                </div>
                <div className='w-[300px]'>
                    <img className='w-full h-[250px] rounded-t-lg' src={MCABooks} alt="" />
                    <div className='h-40 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{books.title4}</p>
                        <p>{books.desc4}</p>
                        <div className='mt-4'>
                            <NavLink to="/fourth" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>{books.button4}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Semesters

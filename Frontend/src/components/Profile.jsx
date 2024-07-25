import React, { useEffect, useState } from 'react'
import DriveImage from '../image/driveImage.jpeg'
import McaImage from '../image/mca_image.jpeg'
import BtechImage from '../image/btech_image.jpg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'
const Profile = () => {
    const navigate = useNavigate();
    useEffect(()=>{if (!localStorage.getItem("loggedin")){{navigate('/')};}})
        
    useEffect(() => {
        document.title = 'Profile';
      }, [])

    const [quiz, setQuiz] = useState(
        {
            title1: 'Drive Quiz',
            title2 : 'MCA Books',
            title3 : 'Btech Books',
            description1: 'These quiz are benificial for you so please give it to improve yourself.',
            description2 : "All semesters's books of mca is available here, click here to download.",
            description3 : "All semesters's books of btech is available here, click here to download.",
            button1: 'Click here',
            button2 : 'Click here',
            button3 : 'Click here'
        }
    )
    return (
        <>
        <NavBar />
            <div className='flex space-x-7 mx-14 mt-10'>
                <div className='w-[430px] h-[10px]'>
                    <img className='w-full h-[210px] rounded-t-lg' src={DriveImage} alt="" />
                    <div className='h-40 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{quiz.title1}</p>
                        <p>{quiz.description1}</p>
                        <div className='mt-4'>
                            <NavLink to="/quizmain" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>{quiz.button1}</NavLink>
                        </div>
                    </div>
                </div>
                <div className='w-[430px] h-[10px]'>
                    <img className='w-full h-[210px] rounded-t-lg' src={McaImage} alt="" />
                    <div className='h-40 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{quiz.title2}</p>
                        <p>{quiz.description2}</p>
                        <div className='mt-4'>
                            <NavLink to="/semesters" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>{quiz.button2}</NavLink>
                        </div>
                    </div>
                </div>
                <div className='w-[400px]'>
                    <img className='w-full h-[210px] rounded-t-lg' src={BtechImage} alt="" />
                    <div className='h-40 text-center bg-gray-200 rounded-b-lg'>
                        <p className='font-semibold text-xl py-2'>{quiz.title3}</p>
                        <p>{quiz.description3}</p>
                        <div className='mt-4'>
                            <NavLink to="/" className='px-2 py-2 text-lg rounded-md border outline outline-1 outline-purple-500 hover:bg-purple-500 hover:text-white'>{quiz.button3}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile

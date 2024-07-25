import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [minutes, setminutes] = useState(9);
    const [seconds, setseconds] = useState(59);

    var timer;
    useEffect(() => {

        timer = setInterval(() => {
            setseconds(seconds - 1);

            if (seconds === 0) {
                setminutes(minutes - 1);
                setseconds(59);
            }
            if(minutes === 0){
                setseconds(0);
                setminutes(0);
            }

        }, 1000)

        return () => clearInterval(timer);
    })
    return (
        <>
            <div className='bg-emerald-500 py-2'>
                <ul className='text-center text-2xl'>
                    <li>{minutes < 10 ? '0'+minutes : minutes}:{seconds < 10 ? '0'+seconds : seconds}</li>
                </ul>
            </div>
        </>
    )
}

export default Clock

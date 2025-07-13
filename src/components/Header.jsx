import React from 'react'

const navLink=[
    {
        url:"",
        text:"Home"
    },
    {
        url:"",
        text:"About"
    },
    {
        url:"",
        text:"Contact"
    },
    {
        url:"",
        text:"Todays Special"
    },
]

const Header = () => {

    return (
        <header className='w-full h-20 grid md:grid-cols-2 sm:grid-cols-[20%_80%] lg::grid-cols-2 xl:grid-cols-2 gap-4 border-b-2 shadow-xl'>
            <div className='h-full flex justify-center items-center'>
                <h2 className='text-red-800 text-2xl text-center font-extrabold uppercase italic'>logo</h2>
            </div>
            <div className='h-full text-center flex justify-around items-center'>
                {navLink.map((item)=>(
                  <a key={item.text} className='text-red-500 hover:text-red-600' href={item.url}>{item.text}</a>
                ))}
            </div>
        </header>
    )
}

export default Header
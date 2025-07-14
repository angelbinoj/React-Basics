import React from 'react'
import { SiShopify } from 'react-icons/si'

const navLink = [
    {
        url: "",
        text: "Home"
    },
    {
        url: "",
        text: "Wishlist"
    },
    {
        url: "",
        text: "Today's Special"
    },
    {
        url: "",
        text: "View Cart"
    },
]

const Header = () => {

    return (
        <header>
            <div className='w-screen px-20 grid md:grid-cols-2 sm:grid-cols-1 lg::grid-cols-2 xl:grid-cols-2 gap-4 border-b-2 shadow-xl'>
                <div className='h-full flex justify-center items-center border border-transparent shadow-xl'>
                    <SiShopify className='w-20 h-20 ps-10 text-slate-900' />
                    <h2 className='text-slate-800 mx-auto text-2xl text-center font-extrabold italic'>ShopOnline</h2>
                </div>
                <div className='h-full text-center flex justify-around items-center'>
                    {navLink.map((item) => (
                        <a key={item.text} className='text-slate-600 hover:text-white hover:bg-slate-500 w-fit px-4 rounded' href={item.url}>{item.text}</a>
                    ))}
                </div>
            </div>
            <div className='bg-slate-700 h-10 w-screen text-white font-semibold italic flex sm:gap-10 md:gap-15 lg:gap-20 justify-center items-center shadow-2xl'>
                <h3 className='w-fit'>Special   Offer!</h3>
                <h4 className='w-fit'><b className='mx-2'>SALE </b> Upto <b className='mx-2'> 50% OFF</b></h4>
                <h3 className='w-fit font-bold uppercase '> mega  sale</h3>

            </div>
        </header>
    )
}

export default Header
import React from 'react'
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { PiPhone } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className='w-[100%] h-[35%] bg-img rounded-[5px]'></div>
            <div className='w-[95%] h-[65%] mx-auto'>
                <div className='w-[100%] flex items-center justify-center'>
                    <h2 className='text-[20px] mt-4 animate-fadeIn'>Online aloqa qilish</h2>
                </div>
                <ul className='w-[100%] mt-4'>
                    <Link to='https://www.instagram.com/islom_barber1/'>
                        <li className='cursor-pointer rounded-[6px] flex items-center gap-8 w-[100%] h-[55px] mt-2 border border-[black] hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-slideIn'>
                            <FaInstagram className='text-[26px] ml-2' />
                            <h2 className='text-[18px] text-center'>Instagram</h2>
                        </li>
                    </Link>
                    <Link to='https://web.telegram.org/k/#@Islom_barber1'>
                        <li className='cursor-pointer rounded-[6px] flex items-center gap-8 w-[100%] h-[55px] mt-2 border border-[black] hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-slideIn'>
                            <FaTelegram className='text-[26px] ml-2' />
                            <h2 className='text-[18px] text-center'>Telegram</h2>
                        </li>
                    </Link>
                    <Link to='https://web.whatsapp.com/k/#@abdullayevislom141@gmail.com'>
                        <li className='cursor-pointer rounded-[6px] flex items-center gap-8 w-[100%] h-[55px] mt-2 border border-[black] hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-slideIn'>
                            <FaWhatsapp className='text-[26px] ml-2' />
                            <h2 className='text-[18px] text-center'>Whatsapp</h2>
                        </li>
                    </Link>
                    <Link to='https://web.telegram.org/k/#@abunxava'>
                        <li className='cursor-pointer rounded-[6px] flex items-center gap-8 w-[100%] h-[55px] mt-2 border border-[black] hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-slideIn'>
                            <FaTelegram className='text-[26px] ml-2' />
                            <h2 className='text-[18px] text-center'>Telegram kanal</h2>
                        </li>
                    </Link>
                    <Link to='+998883286869'>
                        <li className='cursor-pointer rounded-[6px] flex items-center gap-8 w-[100%] h-[55px] mt-2 border border-[black] hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-slideIn'>
                            <PiPhone className='text-[26px] ml-2' />
                            <h2 className='text-[18px] text-center'>Telefon raqamim</h2>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function NavigationBar() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };
    const like = () => {
        navigate('login')
    }
    const cart = () => {
        navigate('cart')
    }
    const menuItems = [
        {
            title: 'Home decor',
            dropdown: ['Living Room', 'Bedroom', 'Outdoor', 'Accessories'],
        },
        {
            title: 'Wall decor',
            dropdown: ['Wall Art', 'Wall Clocks', 'Mirrors', 'Posters'],
        },
        {
            title: 'Floor',
            dropdown: ['Carpets', 'Rugs', 'Mats', 'Tiles'],
        },
        {
            title: 'Rooms',
            dropdown: ['Living Room', 'Dining Room', 'Bedroom', 'Office'],
        },
        {
            title: 'Services',
            dropdown: ['Interior Design', 'Home Consultation', 'Custom Solutions'],
        },
        {
            title: 'Offers',
            dropdown: ['Discounts', 'Bundles', 'Limited Time Deals'],
        },
    ];

    return (
        <>
            <nav className="flex md:justify-between justify-between items-center md:px-4 px-2 mt-2">
                <a className="flex items-center font-bold" href="#">
                    <img
                        onClick={()=>navigate('/')}
                        className="md:h-8 md:w-36 h-6 w-24"
                        src="https://www.ayatrio.com/_next/image?url=%2Fimages%2Fayatriologo.webp&w=384&q=75"
                        alt="Logo"
                    />
                </a>
                <div className="hidden md:flex items-center md:gap-2 lg:gap-10">
                    {menuItems.map((item, index) => (
                        <div
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a
                                className="font-semibold font-sans md:text-[10px] lg:text-[17px] hover:underline py-4"
                                href="#"
                            >
                                {item.title}
                            </a>
                            {activeDropdown === index && (
                                <div className="absolute top-full left-0 w-56 h-56 bg-white shadow-md z-50">
                                    <ul className="flex flex-col gap-2 p-4">
                                        {item.dropdown.map((dropdownItem) => (
                                            <li key={dropdownItem}>
                                                <a
                                                    key={dropdownItem}
                                                    className="block text-black hover:text-blue-700 font-medium"
                                                    href="#"
                                                >
                                                    {dropdownItem}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between gap-3 lg:pr-6 md:pr-2">
                    <div className="hidden px-4 rounded-full md:flex items-center bg-gray-200">
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 50 50"
                        >
                            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                        <input
                            className="bg-gray-200 py-2 w-[8rem] focus:border-none focus:outline-none px-2"
                            type="text"
                            placeholder={`Search for `}
                        />
                    </div>
                    <div className="hidden md:flex md:gap-4 gap-2">
                        <img
                            onClick={like}
                            className="hover:bg-gray-200 hover:rounded-full h-6 w-6"
                            src="https://www.ayatrio.com/icons/like.svg"
                            alt="like"
                        />
                        <img
                            onClick={cart}
                            className="hover:bg-gray-200 hover:rounded-full h-6 w-6"
                            src="https://www.ayatrio.com/icons/adtocart.svg"
                            alt=""
                        />
                        <img
                            onClick={like}
                            className="hover:bg-gray-200 hover:rounded-full h-6 w-6"
                            src="https://www.ayatrio.com/icons/profile.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className='md:hidden flex justify-between'>
                    <div className='flex gap-2 md:gap-4 pr-2'>
                        <img onClick={like} className=' hover:bg-gray-200 hover:rounded-full h-6 w-6 ' src="https://www.ayatrio.com/icons/like.svg" alt="like" />
                        <img onClick={cart} className=' hover:bg-gray-200 hover:rounded-full h-6 w-6' src="https://www.ayatrio.com/icons/adtocart.svg" alt="" />
                        <img onClick={like} className=' hover:bg-gray-200 hover:rounded-full h-6 w-6 ' src="https://www.ayatrio.com/icons/profile.svg" alt="" />
                    </div>
                    <button onClick={handleClick} className='md:hidden'>
                        {!isOpen ? <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32
             L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32
              448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg> : <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>}
                    </button>
                </div>
            </nav>
            <div className='md:hidden flex bg-gray-200 px-4 rounded-full justify-between items-center mt-2'>
                <div className='flex'>
                    <svg className='h-6 w-6 mt-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
                    <input className='bg-gray-200  py-2 w-30 focus:border-none focus:outline-none px-2 ' type="text" placeholder={`Search for `} />
                </div>
                <img className='h-6 w-6' src="https://www.ayatrio.com/icons/camera.svg" alt="" />
            </div>
            {/* meduim menubar */}
            <div className={`${!isOpen ? 'hidden' : 'block'} md:hidden w-full flex flex-col justify-center`}>
                <div className='w-full'>
                    <div className='flex flex-col gap-4 pt-6 mb-6'>
                        {['Home decor', 'Wall decor', 'Floor', 'Rooms', 'Services', 'Offers'].map((item) => (
                            <div className='flex justify-between items-center'>
                                <a key={item} className='font-semibold text-[17px] py-2 px-6 rounded-lg hover:bg-gray-300 font-sans' href="#">{item}</a>
                                <img className='h-5' src="https://img.icons8.com/?size=100&id=9432&format=png&color=000000" alt="" />
                            </div>
                        ))}
                    </div>
                    <div className='h-[.5px] bg-gray-500'></div>
                </div>
                <div className='gap-4 flex flex-col rounded-lg  pt-8 px-4 mb-6'>
                    <a href="#">Live shopping</a>
                    <a href="#">Designer request</a>
                    <a href="#">Free sample request</a>
                    <a href="#">Help</a>
                    <a className='font-semibold' href="#">Login</a>
                </div>
            </div>
            <div className="w-full">
            </div>
        </>
    );
}
export default NavigationBar;


import React from 'react'
function Header() {
    return (
        <header className='hidden sm:flex justify-between items-center bg-gray-100 py-2'>
           <div className='flex gap-6 px-4'>
           <a className='hover:underline' href="/">For you</a>
           <a className='hover:underline' href="/for-business">For business</a>
           </div>
           <div className=' flex text-[13px] gap-2 px-4 items-center'>
                <img className='h-4 w-4' src="https://img.icons8.com/?size=24&id=bx6JPy0W0loj&format=png" alt="" />
                <a href="#">Live Shopping</a>|
                <a href="#">Designer request</a>|
                <a href="#">Free sample request</a>|
                <a href="#">Help</a>
           </div>
        </header>
    )
}

export default Header

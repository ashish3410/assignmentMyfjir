import React from 'react'

function Cart() {
    return (
        <div className='lg:flex mt-32 lg:justify-center lg:items-center h-full'>
            <div className='lg:w-1/2 px-5 lg:px-20'>
                <h1 className=' text-6xl font-bold'>Your shopping bag is empty</h1>
                <p className='text-xl text-gray-600 mt-10'>When you add products to your shopping bag, they will appear here.</p>
                <button className=' text-white font-bold bg-black rounded-full mt-10 py-3 w-full'>Login or sign up</button>
            </div>
            <div className='lg:w-1/2 p-20'>
                <img className='h-96' src="https://www.ayatrio.com/_next/image?url=%2Fimages%2Fempty_bag.webp&w=256&q=75" alt="" />
            </div>

        </div>
    )
}

export default Cart

import React from 'react'

function Like() {
    return (
        <>
        <div className='lg:flex'>
        <div className='lg:w-1/2 flex flex-col lg:px-32 mt-20 px-5 gap-6'>
            <img className='h-10 w-56' src="https://www.ayatrio.com/_next/image?url=%2Fimages%2Flogo%2Fayatriologo.png&w=256&q=75" alt="" />
            <h1 className='text-xl font-bold'>Be Part a Ayatrio membership today. It's free to join? Get the details.</h1>
            <ul className='text-[20px]'>
                <li><span className=' text-5xl mr-2'>.</span>Follow your online orders, in-store buys, and access your purchase history and e-receipts</li>
                <li><span className=' text-5xl mr-2'>.</span>Join community for live, Member-only Interior design events</li>
                <li><span className=' text-5xl mr-2'>.</span>Access to Ayatrio Family offers</li>
                <li><span className=' text-5xl mr-2'>.</span>Create your personal wishlist</li>
            </ul>
            ... and a whole lot more!

            <div className='flex mt-10 gap-2 items-center'>
                <div className='flex flex-col gap-2'>
                <img className='h-56 rounded-lg' src="https://www.ayatrio.com/_next/image?url=%2Fimages%2Flogin%2Flogin1.jpg&w=256&q=75" alt="" />
                <img className='w-44 h-32 rounded-lg' src="https://www.ayatrio.com/_next/image?url=%2Fimages%2Flogin%2Flogin3.jpg&w=256&q=75" alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                <img  className='h-60 rounded-lg'  src="https://www.ayatrio.com/_next/image?url=%2Fimages%2Flogin%2Flogin2.jpg&w=256&q=75" alt="" />
                <img  className='w-44 h-28 rounded-lg' src="https://www.ayatrio.com/_next/image?url=%2Fimages%2Flogin%2Flogin4.jpg&w=256&q=75" alt="" />
                </div>
            </div>
        </div>
        <div className='lg:w-1/2 flex flex-col mt-10 px-5 lg:p-20 justify-center items-center text-center'>
            <h1 className='text-4xl font-bold'>Wellcome to ayatrio family profile</h1>

            <button className='flex mt-10 py-3 px-10 border border-gray-300 text-xl font-bold rounded-full items-center'>
                <img className='h-6 mr-2' src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="" />
                Login with Google</button>
            <button className='flex mt-10 py-3 px-12 border border-gray-300 text-xl font-bold rounded-full items-center'>Login with Business</button>

            <div className='flex mt-10'>
            <input type="checkbox" />
            <p className='text-[12px] px-4'>By continuing, you agree to Ayatrio's Terms of Service, <br/> Privacy policy including Cookie Use .</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Like

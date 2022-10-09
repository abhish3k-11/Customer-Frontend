import React from 'react'
import Assets from '../../Assets'

function Main({ setAuthState }) {
    return (
        <div className="px-10 py-4 h-screen">
            <Assets.BrandLogo className='h-16 -ml-11' />
            <div className='bg-[#DBF6F3] py-2 px-4 mt-1 rounded-xl flex'>
                <p className=' text-xl font-bold'>Q1</p>
                <p className='text-lg pl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='bg-black h-96 rounded-xl mt-2'>
                {/* video & audio component goes here */}
            </div>
            <div className='flex justify-between pt-3 items-center'>
                <div className='w-14 border-2 h-14 hover:cursor-pointer rounded-full border-[#199283]'>
                    <Assets.ArrowLeft className='h-14 ml-4 pb-1'/>
                </div>
                {/* start recording button */}
                <div className=' hover:cursor-pointer w-60 flex justify-center items-center bg-[#2D998C] h-14 rounded-full'>
                    <Assets.Audio className='h-9'/>
                    <p className='text-white text-lg m-1 pr-3'>Start Recording</p>
                </div>
                <div className='w-14 border-2 h-14 hover:cursor-pointer rounded-full border-[#199283]'>
                    <Assets.ArrowRight className=' h-14 ml-5 pb-1'/>
                </div>
            </div>
        </div>
    )
}

export default Main;
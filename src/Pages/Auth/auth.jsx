import React from 'react'
import Assets from '../../Assets'

function Auth({ setAuthState }) {
    const handleClick = () => {
        console.log(setAuthState)
        setAuthState(true)
    }
    return (
        <div className="px-10 py-8 h-screen">
            <Assets.BrandLogo className='h-16 -ml-12' />
            <div className='flex relative'>
                <Assets.LoginIllustration className='h-[500px] -mt-12 -ml-14' />
                <div className='flex flex-col justify-center -ml-20 pt-16 items-center'>
                    <span className=' tracking-widest text-3xl'>When lie can't hide</span>
                    <span className=' tracking-widest text-3xl'>anymore</span>
                    <div className='flex flex-row mt-8'>
                        <input type="checkbox" className='mr-3' />
                        <p>I agree to all the <span className=' text-blue-600'><u>Terms & Condition</u></span></p>
                    </div>
                    <div className='flex flex-row pt-5'>
                        <div className='rounded-full drop-shadow-lg p-5 bg-[#E3F5F4] h-10 w-48 flex justify-center items-center'>
                            <Assets.Keyboard className='w-6' />
                            <input type="text" placeholder='Enter Code' className='w-24 ml-2 pb-1 focus:outline-0 bg-[#E3F5F4]' />
                        </div>
                        <div
                            className=' text-lg ml-6 rounded-full w-48 drop-shadow-lg flex justify-center items-center text-white h-10 bg-[#349F93] hover:cursor-pointer'
                            onClick={handleClick}
                        >
                            Start
                        </div>
                    </div>
                </div>
            </div>
            <p className='pt-5'>@DIC UIET Panjab University</p>
        </div>
    )
}

export default Auth
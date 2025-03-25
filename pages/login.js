import React from 'react';

const login = () => {
    return (
        <div className='bg-[#E51E23] h-screen flex justify-center items-center'>
            <div className='bg-[#fff] max-w-[600px] w-full p-10 m-auto rounded-[20px]'>
                <div className='text-center mb-4'>
                    <h5 className='text-[30px] text-[#000] font-bold mb-2'>OTP Verification</h5>
                    <p className='text-[#727070]'>We Will send you an One Time password on this <br/> mobile number.</p>
                </div>
                <div className="relative mb-[20px]">
                    <label className="text-[16px] te text-[#000] mb-2 block">Enter Mobile Number</label>
                    <input
                        type="number"
                        placeholder="Enter Your Number"
                        value=''
                        className="w-full h-[58px] p-[20px] text-[16px] border border-[#CFD3D4] rounded-lg"
                    />
                </div>
                <div className='w-full'>
                    <button className='bg-[#E51E23] text-[16px] text-[#fff] p-4 uppercase w-full block rounded-[10px] cursor'>Send OTP</button>
                    <p className='text-center mt-3'>Countinue as a <a href='#' className='text-[#E51E23]'>Guest.</a></p>
                </div>
            </div>
        </div>
    );
};

export default login;
import React from 'react';

const GameWin = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center pt-10'>
                <img src='/images/capa-img.png' alt='Capa Images' />
                <h5 className='text-[19px] text-[#E51E23] font-bold pt-[60px] mb-[10px]'>Congratulations !!</h5>
                <p className='text-[16px] text-[#727070]'>Your win message here</p>
            </div>
        </div>
    );
};

export default GameWin;
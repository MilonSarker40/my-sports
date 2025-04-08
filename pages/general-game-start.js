import React from 'react';

const GeneralGameStart = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='max-w-[700px] w-full m-auto'>
                        <div className='flex justify-center items-center pt-[50px]'>
                            <button className='start-btn bg-[#E51E23] w-[176px] h-[176px] border-2 border-white text-[26px] font-bold text-white rounded-full'>Start</button>
                        </div>
                        <div className='mt-10'>
                            <h5 className='font-bold text-[20px] mb-5'>Terms & Conditions:</h5>
                            <p className='text-justify mb-4'><strong>Eligibility:</strong> Only registered users who meet age requirements can participate, with one entry per user per quiz.</p>
                            <p className='text-justify mb-4'><strong>Fair Play:</strong> All answers must be submitted within the time limit without external help. Cheating may lead to disqualification.</p>
                            <p className='text-justify mb-4'><strong>Prizes:</strong> Prizes are awarded based on correct answers and cannot be exchanged for cash. In case of a tie, additional criteria may be used to select winners.</p>
                            <p className='text-justify mb-4'><strong>Modifications:</strong> The platform can change rules or cancel the quiz if necessary, with notice to participants.</p>
                            <p className='text-justify mb-4'><strong>Privacy:</strong> Participants agree to data collection for quiz operation and prize distribution, in line with the platform’s privacy policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralGameStart;
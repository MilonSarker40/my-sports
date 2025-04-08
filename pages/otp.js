import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OTPPage() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const router = useRouter();
  const { phone } = router.query;

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    alert(`OTP resent to ${phone || 'unknown number'}!`);
    setOtp(['', '', '', '']);
    inputs.current[0]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');
    alert(`OTP ${fullOtp} submitted for ${phone || 'unknown number'}`);
  };

  return (
    <div className="bg-[#E51E23] h-screen flex justify-center items-center">
      <div className="bg-white max-w-[600px] w-full p-20 m-auto rounded-[20px]">
        <h2 className="text-2xl font-bold text-center mb-4">OTP Code</h2>
        <h3 className="text-center text-gray-700 mb-6">
          Enter OTP Sent to <span className="font-semibold">{phone || '01844490087'}</span>
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex gap-5 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-[25%] h-12 border-0 border-b-2 border-[#E51E23] text-center text-2xl focus:outline-none"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-[#E51E23] text-white py-3 rounded-lg hover:bg-[#000] transition mb-4"
          >
            Verify
          </button>
          <p className="text-sm text-gray-600">
            Didn't receive code?{' '}
            <button
              type="button"
              onClick={handleResend}
              className="text-[#E51E23] hover:underline"
            >
              Resend OTP
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

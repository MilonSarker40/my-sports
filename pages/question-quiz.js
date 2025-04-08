import { useState, useEffect } from 'react';

const questions = [
  {
    question: 'Who was the first Bangladeshi cricketer to score a double century in Test cricket?',
    options: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mominul Haque'],
  },
  {
    question: 'Who is a wicket keeper?',
    options: ['Soumya Sarkar', 'Litton Das', 'Taskin Ahmed', 'Mehidy Hasan'],
  },
  {
    question: 'Which player is a fast bowler?',
    options: ['Nasum Ahmed', 'Taskin Ahmed', 'Shakib Al Hasan', 'Afif Hossain'],
  },
  {
    question: 'Who is a left-handed batsman?',
    options: ['Mahmudullah', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Liton Das'],
  },
  {
    question: 'Who is a fast bowler?',
    options: ['Nasum Ahmed', 'Taskin Ahmed', 'Shakib Al Hasan', 'Afif Hossain'],
  },
  {
    question: 'Who is a captain?',
    options: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mahmudullah'],
  },
  {
    question: 'Who is the most successful captain?',
    options: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mahmudullah'],
  },
  {
    question: 'Who is the best batsman?',
    options: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Liton Das'],
  },
  {
    question: 'Who is the best bowler?',
    options: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mehidy Hasan'],
  },
  {
    question: 'Who is a wicket-taker?',
    options: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mehidy Hasan'],
  },
];

const optionLabels = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const totalTime = 10;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [elapsed, setElapsed] = useState(0);
  const [startTime, setStartTime] = useState('');
  const [coins, setCoins] = useState(3);

  useEffect(() => {
    const now = new Date();
    setStartTime(now.toLocaleTimeString());
    setElapsed(0);

    const timer = setInterval(() => {
      setElapsed((prev) => {
        if (prev >= totalTime) {
          clearInterval(timer);
          handleSubmit();
          return totalTime;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  const handleOptionSelect = (index) => {
    setAnswers({ ...answers, [currentQuestion]: index });
  };

  const handleSubmit = () => {
    if (answers[currentQuestion] === undefined) {
      alert('Please select an answer!');
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('✅ Quiz Complete!');
    }
  };

  const handlePass = () => {
    if (coins > 0) {
      setCoins(coins - 1);
      alert('You passed this question!');
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert('No more questions.');
      }
    } else {
      alert('You do not have enough coins to pass.');
    }
  };

  // Calculate progress percentage (10% per question, 100% at last question)
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  // Calculate angle for circular progress
  const angle = (progressPercentage / 100) * 360;

  // Generate clip-path for circular progress
  const getClipPath = (angle) => {
    if (angle <= 0) return 'polygon(0 0, 0 0, 0 0)';
    if (angle >= 360) return 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    
    const radians = (angle * Math.PI) / 180;
    const x = 50 + 50 * Math.sin(radians);
    const y = 50 - 50 * Math.cos(radians);
    
    if (angle <= 90) {
      return `polygon(50% 50%, 50% 0%, ${x}% ${y}%)`;
    } else if (angle <= 180) {
      return `polygon(50% 50%, 50% 0%, 100% 0%, ${x}% ${y}%)`;
    } else if (angle <= 270) {
      return `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${x}% ${y}%)`;
    } else {
      return `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, ${x}% ${y}%)`;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 mt-[200px] flex flex-col justify-center items-center rounded-xl shadow-md w-full max-w-2xl relative">
        <div className='mt-[-20px]'>
          {/* Circular Progress Indicator */}
          <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[150px] h-[150px]">
              {/* Background circle */}
              <div className="absolute w-full h-full rounded-full border-2 border-dotted border-[#E51E23]"></div>
              {/* Progress circle */}
              <div
                className="absolute w-full h-full rounded-full border-4 border-[#E51E23]"
                style={{
                  clipPath: getClipPath(angle),
                  transition: 'clip-path 0.5s ease-out',
                }}
              ></div>
              {/* Percentage text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blue-500 font-semibold text-xl">
                  {/* {Math.round(progressPercentage)}% */}
                    <img src='/images/icon.png' alt='Icon' />
                </span>
              </div>
            </div>
          </div>
          {/* Start Time */}
          <div className="text-center text-[22px] font-bold mt-[-40px] text-[#E51E23]">{startTime}</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#000] text-[18px] font-bold mb-1">Question</span>
            <span className="text-[#000] text-[14px] mb-1">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-[#F3F3F3] h-[18px] rounded-full">
            <div
              className="h-[18px] bg-[#E51E23] rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Current Question */}
        <div className="mb-4 mt-6 w-full">
          <h2 className=" max-w-[400px] text-[16px] font-normal text-[#727070] mb-5">
            {questions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, idx) => (
              <label
                key={idx}
                className={`flex items-center border rounded-lg p-3 cursor-pointer transition ${
                  answers[currentQuestion] === idx
                    ? 'border-[#E51E23] text-white bg-[#E51E23]'
                    : 'border-[#efefef] hover:bg-[#E51E23] hover:text-[#fff]'
                }`}
                onClick={() => handleOptionSelect(idx)}
              >
                <span className="font-bold flex justify-center items-center w-[36px] h-[36px] bg-[#DEDEDE7A] rounded-full mr-3">{optionLabels[idx]}</span> {option}
              </label>
            ))}
          </div>
        </div>

        <div className='flex justify-between w-full pt-5'>
            {/* Submit Button */}
            <button
            onClick={handleSubmit}
            className="submit-btn text-white py-2 text-[18px] bg-[#E51E23] w-[200px] h-[45px] font-bold rounded-lg hover:bg-gray-600 transition mb-4"
            >
            Submit
            </button>

            {/* Pass Button */}
            <button
            onClick={handlePass}
            className=" bg-[#A11FA8] w-[135px] h-[45px] relative text-left p-3 text-white text-[18px] font-bold py-2 rounded-lg hover:bg-gray-700 transition mb-4"
            >
            Pass <span className='text-[10px] w-[px] h-[24px] absolute right-2 top-[-10px] flex justify-center text-[#E51E23] p-1 bg-[#fff] border border-[#E51E23] rounded-lg'>{coins} Coins</span>
            </button>
        </div>
      </div>
    </div>
  );
}
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import buffImage from './buff2.png'; // Import the buff imag

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("4g4Ut2qjprnhibgo9mcdB8yGchZ4J1VYz8DjnC4nurkY");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div>
    <div className="h-screen w-screen flex justify-center items-center text-6xl overflow-clip bg-black">
      <div className='grid text-center text-white'>
        get $buff
        <div className='flex justify-center p-8'><img className="w-[40%]" src={buffImage} alt="Buff" /></div>
        <div className='flex justify-center text-black'>
          <a href="https://raydium.io/swap/?outputCurrency=4g4Ut2qjprnhibgo9mcdB8yGchZ4J1VYz8DjnC4nurkY" className='bg-[#f3f3f3] w-min py-4 px-6 rounded-full'>
            buy
          </a>
        </div>
      </div>
    </div>
          <div className='h-min w-screen flex justify-center bg-[#f3f3f3]'>
          <div className='grid w-full'>
            <div className='pt-[10%] font-custom text-5xl md:text-6xl lg:text-8xl text-center'>
              tokenomics
            </div>
            <div className='flex justify-center w-full'>
              <div className='bg-black rounded-xl h-[300px] w-[75%] md:w-[65%] mt-[5%] mb-[5%]'>
                <div className='w-full h-full flex justify-center items-center text-white font-custom text-4xl md:text-5xl lg:text-6xl'>
                  <div className='grid text-center'>
                    total supply
                    <div className="text-center pt-[2%] text-2xl md:text-4xl mx-6">
                      1,000,000,000 $buff
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center w-full'>
              <div className='bg-black rounded-xl h-[300px] w-[75%] md:w-[65%] mb-[10%]'>
                <div className='w-full h-full flex justify-center items-center text-white font-custom text-4xl md:text-5xl lg:text-6xl'>
                  <div className='grid text-center'>
                    token address
                    <div className="text-center pt-[2%] text-2xl md:text-4xl break-all mx-12">
                      4g4Ut2qjprnhibgo9mcdB8yGchZ4J1VYz8DjnC4nurkY
                    </div>
                    <div className='flex justify-center'>
                      <button
                        className="text-xl mt-2 p-2 w-min bg-gray-800 text-white rounded-md hover:bg-gray-600 transition ease-in-out duration-150"
                        onClick={handleCopy}
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
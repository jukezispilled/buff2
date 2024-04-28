import logo from './logo.svg';
import './App.css';
import buffVideo from './buffonsol.mp4'; // Import the buff video
import buffImage from './buff2.png'; // Import the buff imag

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-6xl overflow-clip">
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-[-1]">
        <source src={buffVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='grid text-center'>
        Get $buff
        <div className='flex justify-center p-8'><img className="w-[40%]" src={buffImage} alt="Buff" /></div>
        <div className='flex justify-center'>
          <a href="" className='bg-[#f3f3f3] w-min py-4 px-6 rounded-full'>
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
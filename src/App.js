import './App.css';
import {useState} from "react";

function App() {

  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
      ":(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
      <div className="-mt-16 flex h-screen flex-col items-center justify-center">
        {yesPressed ? (
            <>
              💛🌕
              <br/>
              <div className="my-4 text-4xl font-bold">Always! 😔</div>
            </>
        ) : (
            <>
              <img
                  className="h-[200px]"
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDBzM2pvMDc5NnB2dHJrNXJyampsZTRibTExdnQ0cTVobTZta3dmOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d62ID9ANzAZKvBLh4A/giphy.gif"
              />
              <h1 className="my-4 text-4xl">😔</h1>
              <div className="flex items-center">
                <button
                    className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                    // className="btn btn-success"
                    style={{ fontSize: yesButtonSize }}
                    onClick={() => setYesPressed(true)}
                >
                  😔
                </button>
                <button
                    onClick={handleNoClick}
                    className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                >
                  {noCount === 0 ? "😔" : getNoButtonText()}
                </button>
              </div>
            </>
        )}
      </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import image1 from '../public/Huevo.png';
import image2 from '../public/Huevo2.png';
import image3 from '../public/Huevo3.png';
import image4 from '../public/Huevo4.png';

function App() {
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    if (count >= 10 && count <= 90 && count % 10 === 0) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);

    if ((count + 1) % 30 === 0) {
      switch (count) {
        case 29:
          setCurrentImage(image2);
          break;
        case 59:
          setCurrentImage(image3);
          break;
        case 89:
          setCurrentImage(image4);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <img
        src={currentImage}
        className={`current-image ${animation ? 'my-animation' : ''}`}
        alt="Current Image"
      />
      <h1>¿Lograrás romper el huevo?</h1>
      <div className="card">
        <button onClick={handleClick} className={animation ? 'animate' : ''}>
          Golpes: {count}
        </button>
      </div>
      <p className="read-the-docs">1 Click = 1 Golpe</p>
      <p className="read-the-docs">10 Click = Se mueve</p>
      <p className="read-the-docs">30 Click = Se rompe</p>
    </>
  );
}

export default App;

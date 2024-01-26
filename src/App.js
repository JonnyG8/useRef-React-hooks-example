
import './App.css';
import {useState, useRef} from 'react';

function App() {
  const [number, setNumber] = useState(0);

  let ref = useRef(number);
  console.log(ref.current)

  let refCount = () => {
    return ref.current + 1;
  };

  console.log(refCount());

  let plus = () => {
    setNumber(number + 1);
  }

  console.log('Rerender is complete')

  return (
    <div className="App">
      <button
        onClick={plus}>
        Click
      </button>
      <p>{number}</p>
    </div>
  );
}

export default App;

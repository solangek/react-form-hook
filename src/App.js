import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import FetchHook from "./components/FetchHook";
import FormFetchWithHook from "./components/FormFetchWithHook";
import InputValidationHook from "./components/InputValidationHook";
import LiveFilteringHook from "./components/LiveFilteringHook";


function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCounter = () => {
    //setCount(count + step);
    // or with function
      setCount(prevCount => prevCount + step);
  }

  return (
    <div className="App">

        <h1>Counter demo</h1>
        <Counter value={count} onIncrement={() => setCount(count+1)} label="Demo Counter"/>

        <hr/>

        <h1>Input validation with hook</h1>
        <InputValidationHook/>

        <hr/>

        <h1>Live filtering with hook</h1>
        <LiveFilteringHook/>

        <hr/>

        <h1>Fetch with hook</h1>
        <FetchHook/>

        <hr/>

        <h1>Form fetch with hook</h1>
        <FormFetchWithHook/>
        <hr/>
    </div>
  );
}

export default App;

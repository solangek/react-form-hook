import {useState} from "react";
import Counter from "./components/Counter";
import FetchHook from "./components/fetch/FetchHook";
import FormFetchWithHook from "./components/fetchwithform/FormFetchWithHook";
import InputValidationHook from "./components/inputvalidation/InputValidationHook";
import LiveFilteringHook from "./components/livehook/LiveFilteringHook";


function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCounter = () => {
      // setCount(count + step);
      // the setCount function can receive a function that returns the new value
      // so we can write instead:
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

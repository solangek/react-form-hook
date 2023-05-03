import {useState} from "react";
import Counter from "./components/Counter";
import FetchHook from "./components/fetch/FetchHook";
import FormFetchWithHook from "./components/customhook/FormFetchWithHook";
import InputValidationHook from "./components/inputvalidation/InputValidationHook";
import LiveFilteringHook from "./components/livehook/LiveFilteringHook";
import CounterCustomHook from "./components/customhook/CounterCustomHook";
import CounterNotWorking from "./components/customhook/CounterNotWorking";


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

        <h1>Form fetch with custom hook</h1>
        <FormFetchWithHook/>
        <hr/>

        <h1>SetInterval not working</h1>
        <CounterNotWorking/>

        <h1>SetInterval working with custom hook</h1>
        <CounterCustomHook/>
        <p>Read this <a href={"https://overreacted.io/making-setinterval-declarative-with-react-hooks/"}>great article</a> explaining this code.</p>

    </div>
  );
}

export default App;

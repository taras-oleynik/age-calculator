import "./App.css";
import { useState } from "react";
import BirthData from "./BirthData";
import Divider from "./Divider";
import AgeCalculator from "./AgeCalculator";

function App() {
  const [birthDate, setBirthDate] = useState(null);
  return (
    <div className="App">
      <div className="container">
        <BirthData setBirthDate={setBirthDate} />
        <Divider />
        <AgeCalculator birthDate={birthDate} />
      </div>
    </div>
  );
}

export default App;

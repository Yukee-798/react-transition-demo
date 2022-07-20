import { useState } from "react";
import CirclePacking from "./components/CirclePacking";
import Slider from "./components/Slider";
import { circlePackingDefaultData } from "./constants";

function App() {
  const [data, setData] = useState(circlePackingDefaultData);

  return (
    <div className="app">
      <Slider defaultValue={30} />
      <CirclePacking data={data} />
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentD from "./components/ComponentD";
import ComponentE from "./components/ComponentE";
function App() {
  const name = "Ram";
  const myRef = useRef();

  const [state, setState] = useState(1);
  // Redux , Zustand

  useEffect(() => {
    console.log(myRef.current);
  }, []);

  return (
    <div>
      <ComponentD />
      <ComponentE />
      <ComponentB setState={setState} />
      <ComponentC state={state} />
      <h1 ref={myRef} title="name">
        Hello {name}
      </h1>

      <ComponentA label="A" subtitle="sub of A" />
      <ComponentA label="B" />
      <ComponentA label="C" />
      <ComponentA subtitle="sub title of last component" />
      <ComponentA label="D" />
    </div>
  );
}
export default App;

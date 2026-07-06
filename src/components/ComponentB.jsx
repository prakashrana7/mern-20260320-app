import { useEffect, useState } from "react";

//Create, Update, Destroy

function ComponentB() {
  const [result, setResult] = useState("dark"); //RETURNS ARRAY, FIRST ELEMENT STATE VALUE, SECOND ELEMENT FUNCTION

  useEffect(
    //FUNCTION
    () => {
      //do something here
      console.log("hello from use effect");

      return () => {
        //destroy/cleanup
      };
    },
    //dependency array (state variables);
    [result],
  );

  return (
    <div>
      <h1>state:{result}</h1>
      <button onClick={() => setResult(result == "dark" ? "light" : "dark")}>
        update state
      </button>
    </div>
  );
}

export default ComponentB;

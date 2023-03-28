import React, { useState } from "react";
// We import our HelloDiv from the components folder
import HelloDiv from "./components/HelloDiv";

// App is our top-level main component that references other components
function App() {
  const [greeting, setGreeting] = useState(["Heyo", "Yo what up!", "Peace"])

  return (
  <div>
    <HelloDiv />
  <div>
    <p>{greeting.map((element, index) => {
      return <p>{element}</p>
    })}</p>
  </div>
  </div>
  );
}

export default App;

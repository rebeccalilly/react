// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  /*
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  */

  // previous code
  /*
  <Alert>
    Hello <span>World</span>
  </Alert>
  <ListGroup
    items={items}
    heading="Cities"
    onSelectItem={handleSelectItem}
  />
  */

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Click me!</Button>
    </div>
  );
}

export default App;

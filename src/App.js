import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeword(e.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("Call the API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 6) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button text={"Continue"}/> */}
    </div>
  );
}

export default App;

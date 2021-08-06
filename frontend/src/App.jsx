import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const createData = () => {
    axios
      .post("/api/value", { value })
      .then((res) => {
        setList([...list, res.data]);
      })
      .catch(console.log);
  };
  useEffect(() => {
    axios.get("/api/values").then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={createData}>gossdd</button>
      {list.map((item) => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
}

export default App;

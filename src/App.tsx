import React from "react";
import { Dropdown } from "./components/Dropdown";

import "./styles.css";

export default function App() {
  const [time, setTime] = React.useState("");

  const handleSetTime = (value: string) => setTime(value);

  return (
    <div id="root" className="App">
      hello world
      <Dropdown
        placeholder="Time"
        options={["1m", "5m", "15m"]}
        onChange={handleSetTime}
        value={time}
      />
    </div>
  );
}

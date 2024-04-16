import React, { useState } from "react";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
  const [tasks, settasks] = useState([]);


  return (
    <div className="w-screen h-screen bg-zinc-800 overflow-x-hidden">
      <div className="overflow-x-hidden w-screen mini-h-[100vh] bg-zinc-800 flex items-center flex-col">
        {/* {Header} */}
        <Header tasks = {tasks}/>
        {/* {create} */}
        <Create tasks = {tasks} settasks={settasks}/>
        {/* {Show} */}
        <Show tasks = {tasks} settasks={settasks}/>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import Movies from "../src/components/Movies/Movies";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
};

export default App;

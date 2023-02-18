import "./App.css";
import MainCard from "./components/MainCard";
import { useEffect, useState } from "react";
import ItemCardsContainer from "./ItemCardsContainer";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="app">
      <div className="containers">
        <MainCard />

        <ItemCardsContainer data={data} />
      </div>
    </div>
  );
}

export default App;

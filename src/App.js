import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [disable, setDisable] = useState(true);
  const [twitt, setTwitt] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (twitt.length > 5 && twitt.length < 50) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [twitt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, twitt]);
    setTwitt("");
  };
  return (
    <div className="App">
      <h1>Mini-Twitt</h1>
      <div className="container">
        <h2>Express yourself</h2>
        <input
          type="text"
          className="container__input"
          value={twitt}
          onChange={(e) => setTwitt(e.target.value)}
        />
        <button
          className="container__btn"
          disabled={disable}
          onClick={handleSubmit}
        >
          Enviar
        </button>
        <div className="container__list">
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

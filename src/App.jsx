import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUser(res.data))
        .catch((err) => console.log("you're wrong"));
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {user.map((e) => (
            <li>{e.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

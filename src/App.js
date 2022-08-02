import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { Cards } from "./Components/Cards/Cards";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Cards />
    </div>
  );
}

export default App;

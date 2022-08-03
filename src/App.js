import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { Cards } from "./Components/Cards/Cards";
import { Login } from "./Components/Login/Login";
import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      {openModal && <Login closeModal={setOpenModal} />}
      <Header setOpenModal={setOpenModal} />
      <Search setSearch={setSearch} />
      <Cards search={search} />
    </div>
  );
}

export default App;

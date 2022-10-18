import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import BluePage from "./pages/BluePage";
import RedPage from "./pages/RedPage";

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
      {/* <ul>
        <li>
          <a href="/blue">blue2</a>
        </li>
      </ul>
      <a href="/red">red2</a> */}
    </div>
  );
}

export default App;

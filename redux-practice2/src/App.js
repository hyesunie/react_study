import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import NotUseLibraryContainer from "./containers/NotUseLibraryContainer";
import ThunkContainer from "./containers/ThunkContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <NotUseLibraryContainer />
      <ThunkContainer />
    </div>
  );
}

export default App;

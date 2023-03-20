import "./App.scss"; //rafce to generate new componenets
import TitleBar from "./Components/TitleBar/titleBar";
import FilterBar from "./Containers/FilterBar/filterBar";
function App() {
  return (
    <div className="App">
      <>
      <TitleBar /></>
      <FilterBar/>
    </div>
  );
}

export default App;

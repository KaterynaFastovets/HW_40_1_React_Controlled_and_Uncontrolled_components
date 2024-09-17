import logo from "./logo.svg";
import "./App.css";

import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
import UserData from "./components/UserData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logotyp REACT" />
        <h1> Learn React</h1>
        <div className="div-form" >
          <UncontrolledForm />
          <ControlledForm/>
          <UserData/>
        </div>
      </header>
    </div>
  );
}

export default App;

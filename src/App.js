import './App.css';
import Inputtext from "./components/input_text/input_text";
import Databox from "./components/databox/databox";
import "./config/connection";
function App() {
  return (
        <Databox>
          <Inputtext/>
          <Inputtext/>
          <Inputtext/>
          <Inputtext/>
          <Inputtext/>
          <Inputtext/>
          <Inputtext/>
        </Databox>
          );
}

export default App;

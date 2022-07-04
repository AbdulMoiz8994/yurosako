import "./App.scss";
import { Header } from "./layout";
import {Dashboard} from "./modules"
function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* <h1>Heloo</h1>       */}
      {/* <Header /> */}
      <Dashboard/>
    </div>
  );
}

export default App;

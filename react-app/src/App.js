import { ContactInfo } from "./components/ContactInfo";
import { WorkExperience } from "./components/WorkExperience";
import "./App.css";
import { Photo } from "./components/Photo";
import myImage from "./assets/yakovenkoA.png";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <Photo src={myImage} />
        <ContactInfo />
      </div>
      <div>
        <WorkExperience />
        <Counter />
      </div>
    </div>
  );
}

export default App;

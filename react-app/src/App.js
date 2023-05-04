import { ContactInfo } from "./components/ContactInfo";
import { WorkExperience } from "./components/WorkExperience";
import "./App.css";
import { Photo } from "./components/Photo";
import myImage from "./assets/yakovenkoA.png";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Photo src={myImage} />
        <ContactInfo />
      </div>
      <WorkExperience />
    </div>
  );
}

export default App;

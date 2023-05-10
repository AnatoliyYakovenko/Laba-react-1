import { ContactInfo } from "../ContactInfo";
import { WorkExperience } from "../WorkExperience";
import { Photo } from "../Photo";
import myImage from "../../assets/yakovenkoA.png";

export function Resume() {
  return (
    <div className="resume">
      <div>
        <Photo src={myImage} />
        <ContactInfo />
      </div>
      <div>
        <WorkExperience />
      </div>
    </div>
  );
}



import { ContactInfo } from "../ContactInfo";
import { WorkExperience } from "../WorkExperience";
import { Photo } from "../Photo";
import myImage from "../../assets/yakovenkoA.png";

import css from './Resume.module.css';


export function Resume() {
  return (
    <div className={css.resume}>
        <div>
        <Photo src={myImage} />
        <ContactInfo />
        </div>
        <WorkExperience />
    </div>
  );
}



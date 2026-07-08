import { IconType } from "react-icons";

export interface Skill {
  name: string;

  icon: IconType;

  stars: 1 | 2 | 3 | 4 | 5;

  color: string;

  experience: string;

  details: string[];
}
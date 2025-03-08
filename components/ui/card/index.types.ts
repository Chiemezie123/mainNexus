import { JSX } from "react";

export interface firstCardProps {
 firstText: string;
 secondText: string;
    thirdText: string;   
    backgroundColor: string;
}

export interface thirdCardProps {
    jobTitle: string;
    location: string;
    icon: JSX.Element;
}

export interface fourthCardProps{
    step: string;
    header:string;
    description:string;
    rotation:string
}
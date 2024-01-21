import { Metadata } from "next";
import Heading from "../components/Heading";
export const metadata: Metadata={
    title: 'About'
}
export default function AboutPage(){
    console.log("About Page");
    return (
        <>
        <Heading>About</Heading>
            <p>About the website</p>
        </>
    );
}
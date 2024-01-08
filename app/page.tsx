import Link from "next/link";
import Heading from "./components/Heading";

export default function HomePage(){
    console.log("Home page");
    return (
        <>
        <Heading>Game Review</Heading>
            <p className="capitalize hover:uppercase text-sky-400">All Best Game Review</p>
            <p className="text">Review list</p>
            <ul className="transition m-3 list-outside text-red-900 list-none hover:list-disc">
                <li>
                    <Link href="/reviews/hollow-knight">Hollow Knight</Link>
                </li>
                <li>
                    <Link href="/reviews/stardew-valley">Stardew Valley</Link>
                </li>
            </ul>
        </>
        
    );
}
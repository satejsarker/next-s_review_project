import Link from "next/link";
import Image from "next/image";
import Heading from "./components/Heading";

export default function HomePage(){
    console.log("Home page");
    return (
        <>

<Heading>Indie Review</Heading>
            <p className="pb-3"> Best indie game review</p>
            <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
                    <Link  className="flex flex-col sm:flex-row"
                    href="/reviews/stardew-valley">

                        <Image
                            src="/images/stardew-valley.jpg"
                            className="rounded-t sm:rounded-l sm:rounded-r-none" alt=""
                            width={320} height={180}

                        />
                        <h1 className=" font-orbitron font-semibold py-1 text-center sm:px-2">
                        Stardew Valley</h1></Link>
                </div>
        
        </>
    );
}
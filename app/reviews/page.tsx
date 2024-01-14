import Link from "next/link";
import Heading from "../components/Heading";
import Image from "next/image";

export default function ReviewPage() {
    console.log("About Page");
    return (
        <>
            <Heading>Game Review</Heading>
            <ul className="flex flex-col gap-3">
                <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
                    <Link href="/reviews/hollow-knight">
                        <Image
                            src="/images/hellblade.jpg"
                            className="mb-2 rounded"
                            width={320} height={180}
                            alt=""

                        />
                        <h1 className=" font-semibold py-1 font-orbitron text-center">
                        Hollow Knight
                        </h1>
                       </Link>
                </li>
                <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
                    <Link href="/reviews/stardew-valley">

                        <Image
                            src="/images/stardew-valley.jpg"
                            className="mb-2 rounded" alt=""
                            width={320} height={180}

                        />
                        <h1 className=" font-orbitron font-semibold py-1 text-center">
                        Stardew Valley</h1></Link>
                </li>
            </ul>
        </>
    );
}
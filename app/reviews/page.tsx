import Link from "next/link";
import Heading from "../components/Heading";
import Image from "next/image";

export default function ReviewPage() {
    console.log("About Page");
    return (
        <>
            <Heading>Game Review</Heading>
            <ul className=" flex flex-col transition m-3 list-outside text-red-900 list-none hover:list-disc">
                <li>
                    <Link href="/reviews/hollow-knight">
                        <Image
                            src="/images/hellblade.jpg"
                            className="mb-2 rounded"
                            width={320} height={180}
                            alt=""

                        />
                        Hollow Knight</Link>
                </li>
                <li>
                    <Link href="/reviews/stardew-valley">

                        <Image
                            src="/images/stardew-valley.jpg"
                            className="mb-2 rounded" alt=""
                            width={320} height={180}

                        />
                        Stardew Valley</Link>
                </li>
            </ul>
        </>
    );
}
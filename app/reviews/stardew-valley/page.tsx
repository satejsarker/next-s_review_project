import Heading from "@/app/components/Heading";
import Image from "next/image";
export default function StardewPage(){
    console.log("About Page");
    return (
        <>
        <Heading>Stardew Valley</Heading>
        <Image
                src="/images/stardew-valley.jpg"
                className="mb-2 rounded" alt=""
                width={640} height={360}
                
            />
            <p>Review page for StarDew</p>
        </>
    );
}
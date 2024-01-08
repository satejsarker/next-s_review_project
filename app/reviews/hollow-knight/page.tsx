import Heading from "../../components/Heading";
import Image from 'next/image'

export default function HollowKnightPage() {
    return (
        <>
            <Heading>Hollow Knight </Heading>
            <Image
                src="/images/hellblade.jpg"
                className="mb-2 rounded"
                width={640} height={360}
                alt=""
                
            />
            <p>Review page for Hollow Knight</p>
        </>
    );
}
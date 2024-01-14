import Link from "next/link";
import Heading from "../components/Heading";
import Image from "next/image";
import { getReviews } from "@/lib/reviews";

export default async function ReviewPage() {
    const reviews = await getReviews()

    return (
        <>
            <Heading>Game Review</Heading>
            <ul className="flex flex-row flex-wrap gap-3">
                {reviews.map((review) => (
                    <li key={review.slug}
                        className="bg-white border rounded shadow w-80 hover:shadow-xl">
                        <Link
                        href={`/reviews/${review.slug}`}>
                            <Image
                                src={review.image}
                                className="mb-2 rounded"
                                width={320} height={180}
                                alt="" />
                            <h1 className=" font-semibold py-1 font-orbitron text-center">
                                {review.title}
                            </h1>
                        </Link>
                    </li>
                ))}

            </ul>
        </>
    );
}
import Heading from "@/app/components/Heading";
import { getReview } from "@/lib/reviews";

import Image from "next/image";

export default async function ReviewPage({params:{slug}}) {
    console.log(slug)
    const review= await getReview(slug)
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className="italic pb-2">{review.date}</p>
            <Image
                src={review.image}
                className="mb-2 rounded" alt=""
                width={640} height={360}
            />
            <article className="max-w-screen-sm prose prose-slate" dangerouslySetInnerHTML={{ __html: review.body }}></article>
        </>
    );
}
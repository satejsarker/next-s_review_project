import Heading from "@/app/components/Heading";
import ShareButtons from "@/app/components/ShareButtons";
import { getReview, getSlugs } from "@/lib/reviews";

import Image from "next/image";
export async function generateStaticParams() {
    const slugs= await getSlugs();
    return slugs.map((slug)=>({slug}));
}
export async function generateMetadata({params:{slug}}) {
    const review = await getReview(slug)
    return {
        title: review.title
    }
}
export default async function ReviewPage({params:{slug}}) {
    const review= await getReview(slug)
    console.log('[ReviewPage', slug);
    return (
        <>
            <Heading>{review.title}</Heading>
            <div className="flex gap-3 items-baseline">
            <p className="italic pb-2">{review.date}</p>
            <ShareButtons/>
            </div>

            <Image
                src={review.image}
                className="mb-2 rounded" alt=""
                width={640} height={360}
            />
            <article className="max-w-screen-sm prose prose-slate" dangerouslySetInnerHTML={{ __html: review.body }}></article>
        </>
    );
}
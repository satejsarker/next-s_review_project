import Heading from "@/app/components/Heading";
import { readFile } from "node:fs/promises";
import Image from "next/image";
import {marked} from 'marked';
export default async function StardewPage(){
    const text= await readFile('./content/reviews/stardew-valley.md','utf8');
    const html= marked(text)
    return (
        <>
        <Heading>Stardew Valley</Heading>
        <Image
                src="/images/stardew-valley.jpg"
                className="mb-2 rounded" alt=""
                width={640} height={360}
            />
            <article  className="max-w-screen-sm prose prose-slate" dangerouslySetInnerHTML={{__html: html}}></article>
        </>
    );
}
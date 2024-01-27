import Link from 'next/link';
import Heading from '../components/Heading';
import Image from 'next/image';
import { getReviews } from '@/lib/reviews';

export default async function ReviewPage() {
  const reviews = await getReviews();
  console.log(reviews);
  return (
    <>
      <Heading>Game Review</Heading>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='w-80 rounded border bg-white shadow hover:shadow-xl'
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                className='mb-2 rounded'
                width={320}
                height={180}
                alt=''
              />
              <h1 className=' py-1 text-center font-orbitron font-semibold'>
                {review.title}
              </h1>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

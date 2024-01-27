import Link from 'next/link';
import Image from 'next/image';
import Heading from './components/Heading';
import { getFeaturedReview } from '@/lib/reviews';

export default async function HomePage() {
  console.log('Home page');
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Review</Heading>
      <p className='pb-3'> Best indie game review</p>
      <div className='w-80 rounded border bg-white shadow hover:shadow-xl sm:w-full'>
        <Link
          className='flex flex-col sm:flex-row'
          href={`/reviews/${review.slug}`}
        >
          <Image
            src={review.image}
            className='rounded-t sm:rounded-l sm:rounded-r-none'
            alt=''
            width={320}
            height={180}
          />
          <h1 className=' py-1 text-center font-orbitron font-semibold sm:px-2'>
            {review.title}
          </h1>
        </Link>
      </div>
    </>
  );
}

import matter from 'gray-matter';
import { marked } from 'marked';
import { readdir, readFile } from 'node:fs/promises';

import qs from 'qs';
const CMS_URL = 'http://localhost:1337';
export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}
export async function getReview(slug) {
  const { data } = await fetchReview({
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: { image: { fields: ['url'] } },
    filters: { slug: { $eq: slug } },
    pagination: { pageSize: 1, withCount: false },
  });
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body),
  };
}

export async function getReviews() {
  const { data } = await fetchReview({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt'],
    pagination: { pageSize: 6 },
  });
  return data.map(toReview);
}

export async function getSlugs() {
  const { data } = await fetchReview({
    fields: ['slug'],
    sort: ['publishedAt'],
    pagination: { pageSize: 100 },
  });
  return data.map((item) => item.attributes.slug);
}

async function fetchReview(parameters) {
  let url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(parameters, {
      encodeValuesOnly: true,
    });
  console.log('fetch url', url);
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    throw err;
  }
}

function toReview(item) {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, 'yyy-mm-dd'.length),
    image: CMS_URL + attributes.image.data.attributes.url,
  };
}

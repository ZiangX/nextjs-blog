import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  console.log('allPostsData', allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {Object.values(allPostsData).map((v) => {
            console.log('val', v);
            return (
              <ul>
                <li>{v.category_name_zh}</li>
              </ul>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData()
  let data = await fetch('https://modernfoodie.greenolivechurch.org/categories');
  data = await data.json();

  console.log(data.categories);

  return {
    props: {
      allPostsData: data.categories,
    },
  };
}

import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const icon = '/favicon.ico';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={icon} rel="icon" sizes="any" />
        <link href={icon} rel="icon" type="image/svg+xml" />
        <link href={icon} rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="https://nasser.tahan.business/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnasser_anime_style_2.9c7454fd.jpg&w=750&q=75" property="og:image" />
        <meta content="website" property="og:type" />
        <meta content={title} property="og:site_name" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="https://nasser.tahan.business/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnasser_anime_style_2.9c7454fd.jpg&w=750&q=75" name="twitter:image" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;

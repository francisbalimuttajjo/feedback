import Head from "next/head";

import React from "react";

function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="budget app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default HeadComponent;

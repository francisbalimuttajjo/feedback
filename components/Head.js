import Head from "next/head";

import React from "react";

function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="feedbackappbafra" content="feedback app " />
      <link rel="icon" href="/emoji.jpg" />
    </Head>
  );
}

export default HeadComponent;

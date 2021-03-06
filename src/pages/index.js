import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={["Open Source Community Africa", "Open Source Festival", "OSCA", "OSF"]}
        title="Home"
      />
    </Layout>
  );
}

export default IndexPage;

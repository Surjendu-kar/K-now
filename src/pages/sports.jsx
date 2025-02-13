import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Sports from "../components/sports";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Sports"} />
      <Sports />
    </Wrapper>
  );
};

export default index;

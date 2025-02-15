import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import TCSample from "../components/tc_sample";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"TCSample"} />
      <TCSample />
    </Wrapper>
  );
};

export default index;

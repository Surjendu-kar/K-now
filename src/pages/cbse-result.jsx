import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import CBSEResult from "../components/cbse-result";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"CBSE Result"} />
      <CBSEResult />
    </Wrapper>
  );
};

export default index;

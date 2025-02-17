import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Infrastructure from "../components/infrastucture";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Infrastructure"} />
      <Infrastructure />
    </Wrapper>
  );
};

export default index;

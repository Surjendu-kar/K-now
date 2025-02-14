import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import FeeScholarship from "../components/fee-and-scholarship";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Fee And Scholarship"} />
      <FeeScholarship />
    </Wrapper>
  );
};

export default index;

import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import PrincipalMessage from "../components/principal-message";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Principal Message"} />
      <PrincipalMessage />
    </Wrapper>
  );
};

export default index;

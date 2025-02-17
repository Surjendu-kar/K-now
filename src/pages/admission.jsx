import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Admission from "../components/admission";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Admission"} />
      <Admission />
    </Wrapper>
  );
};

export default index;

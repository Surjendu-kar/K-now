import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import CBSE from "../components/cbse-activities";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"CBSE"} />
      <CBSE />
    </Wrapper>
  );
};

export default index;

import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Olympiad from "../components/olympiad";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Olympiads"} />
      <Olympiad />
    </Wrapper>
  );
};

export default index;

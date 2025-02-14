import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Affliation from "../components/affliation";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Affliation"} />
      <Affliation />
    </Wrapper>
  );
};

export default index;

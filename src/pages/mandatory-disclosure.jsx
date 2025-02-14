import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import MandatoryDisclosure from "../components/mandatory-disclosure";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Mandatory Disclosure"} />
      <MandatoryDisclosure />
    </Wrapper>
  );
};

export default index;

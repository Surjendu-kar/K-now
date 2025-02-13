import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Achievements from "../components/achievements";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"School Activity"} />
      <Achievements />
    </Wrapper>
  );
};

export default index;

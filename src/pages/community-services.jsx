import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import CommunityServices from "../components/community-services";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Community Services"} />
      <CommunityServices />
    </Wrapper>
  );
};

export default index;

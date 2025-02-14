import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Notice from "../components/notice";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Notice"} />
      <Notice />
    </Wrapper>
  );
};

export default index;

import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import SchoolAtAGlance from "../components/school-at-glance";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"School at a glance"} />
      <SchoolAtAGlance />
    </Wrapper>
  );
};

export default index;

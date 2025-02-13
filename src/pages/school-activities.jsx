import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import SchoolActivity from "../components/school-activities";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"School Activity"} />
      <SchoolActivity />
    </Wrapper>
  );
};

export default index;
